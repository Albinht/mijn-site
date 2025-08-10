'use client';

import { useState, useEffect, use, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientDetailPage({ params }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [client, setClient] = useState(null);
  const [tasks, setTasks] = useState({ TODO: [], IN_PROGRESS: [], REVIEW: [], DONE: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('tasks');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [draggedTask, setDraggedTask] = useState(null);
  const [dragOverColumn, setDragOverColumn] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editingTaskTitle, setEditingTaskTitle] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [quickAddColumn, setQuickAddColumn] = useState(null);
  const [quickAddTitle, setQuickAddTitle] = useState('');
  const [showEditClientModal, setShowEditClientModal] = useState(false);
  const [editingChecklist, setEditingChecklist] = useState(null);
  const [editingChecklistItem, setEditingChecklistItem] = useState(null);
  const [editingChecklistText, setEditingChecklistText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [taskComment, setTaskComment] = useState('');
  const [taskComments, setTaskComments] = useState({});
  
  // Task form data
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    priority: 'MEDIUM',
    category: '',
    assignee: '',
    dueDate: '',
    status: 'TODO'
  });
  const [isCreatingTask, setIsCreatingTask] = useState(false);

  // Fetch client details
  const fetchClient = async () => {
    try {
      const response = await fetch(`/api/clients/${id}`);
      const data = await response.json();
      
      if (data.success) {
        setClient(data.data);
        
        // Organize tasks by status and ensure no duplicates
        const tasksByStatus = { TODO: [], IN_PROGRESS: [], REVIEW: [], DONE: [] };
        const seenTaskIds = new Set();
        
        data.data.tasks?.forEach(task => {
          // Prevent duplicate tasks
          if (!seenTaskIds.has(task.id)) {
            seenTaskIds.add(task.id);
            if (tasksByStatus[task.status]) {
              tasksByStatus[task.status].push(task);
            }
          }
        });
        setTasks(tasksByStatus);
      } else {
        setError(data.error || 'Failed to load client');
      }
    } catch (error) {
      setError('Failed to load client details');
      console.error('Error fetching client:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClient();
  }, [id]);

  // Create new task
  const handleCreateTask = async (e) => {
    e.preventDefault();
    setIsCreatingTask(true);
    setError('');
    
    try {
      const response = await fetch(`/api/clients/${id}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...taskForm,
          status: taskForm.status || 'TODO'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess('Task created successfully!');
        setShowTaskModal(false);
        setTaskForm({
          title: '',
          description: '',
          priority: 'MEDIUM',
          category: '',
          assignee: '',
          dueDate: '',
          status: 'TODO'
        });
        fetchClient(); // Refresh data
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Failed to create task');
      }
    } catch (error) {
      setError('Failed to create task');
      console.error('Error creating task:', error);
    } finally {
      setIsCreatingTask(false);
    }
  };

  // Handle drag and drop
  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDragEnter = (e, status) => {
    e.preventDefault();
    setDragOverColumn(status);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setDragOverColumn(null);
  };

  const handleDrop = async (e, newStatus) => {
    e.preventDefault();
    setDragOverColumn(null);
    if (!draggedTask) return;
    
    // Prevent dropping on the same column
    if (draggedTask.status === newStatus) {
      setDraggedTask(null);
      return;
    }
    
    // Optimistically update UI first
    const newTasks = { ...tasks };
    // Remove from old column
    newTasks[draggedTask.status] = newTasks[draggedTask.status].filter(t => t.id !== draggedTask.id);
    // Add to new column
    const updatedTask = { ...draggedTask, status: newStatus };
    newTasks[newStatus] = [...newTasks[newStatus], updatedTask];
    setTasks(newTasks);
    
    try {
      const response = await fetch(`/api/tasks/${draggedTask.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccess(`Task moved to ${newStatus.replace('_', ' ').toLowerCase()}`);
        setTimeout(() => setSuccess(''), 2000);
      } else {
        // Revert on failure
        const revertTasks = { ...newTasks };
        revertTasks[newStatus] = revertTasks[newStatus].filter(t => t.id !== draggedTask.id);
        revertTasks[draggedTask.status] = [...revertTasks[draggedTask.status], draggedTask];
        setTasks(revertTasks);
        setError('Failed to move task');
      }
    } catch (error) {
      // Revert on error
      const revertTasks = { ...newTasks };
      revertTasks[newStatus] = revertTasks[newStatus].filter(t => t.id !== draggedTask.id);
      revertTasks[draggedTask.status] = [...revertTasks[draggedTask.status], draggedTask];
      setTasks(revertTasks);
      setError('Failed to update task status');
      console.error('Error updating task:', error);
    }
    
    setDraggedTask(null);
  };

  // Handle task editing
  const handleStartEditingTask = (task) => {
    setEditingTask(task.id);
    setEditingTaskTitle(task.title);
  };

  const handleSaveTaskTitle = async (taskId) => {
    if (!editingTaskTitle.trim()) {
      setEditingTask(null);
      return;
    }

    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editingTaskTitle })
      });
      
      if (response.ok) {
        // Update local state - find and update the task in its current status
        const updatedTasks = { ...tasks };
        let taskFound = false;
        
        Object.keys(updatedTasks).forEach(status => {
          if (!taskFound) {
            const taskIndex = updatedTasks[status].findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
              updatedTasks[status][taskIndex] = { 
                ...updatedTasks[status][taskIndex], 
                title: editingTaskTitle 
              };
              taskFound = true;
            }
          }
        });
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error('Failed to update task title:', error);
    }
    
    setEditingTask(null);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowTaskDetails(true);
    setTaskComment(''); // Reset comment when opening a task
  };

  const handleUpdateTask = async (taskId, updates) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      
      if (response.ok) {
        // Update local state - find the task in its current status
        const updatedTasks = { ...tasks };
        let taskFound = false;
        
        Object.keys(updatedTasks).forEach(status => {
          if (!taskFound) {
            const taskIndex = updatedTasks[status].findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
              updatedTasks[status][taskIndex] = { 
                ...updatedTasks[status][taskIndex], 
                ...updates 
              };
              taskFound = true;
            }
          }
        });
        setTasks(updatedTasks);
        
        if (selectedTask?.id === taskId) {
          setSelectedTask({ ...selectedTask, ...updates });
        }
      }
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Update local state
        const updatedTasks = { ...tasks };
        Object.keys(updatedTasks).forEach(status => {
          updatedTasks[status] = updatedTasks[status].filter(task => task.id !== taskId);
        });
        setTasks(updatedTasks);
        setShowTaskDetails(false);
        setSelectedTask(null);
      }
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  // Quick add task
  const handleQuickAddTask = async (status) => {
    if (!quickAddTitle.trim()) {
      setQuickAddColumn(null);
      setQuickAddTitle('');
      return;
    }

    try {
      const response = await fetch(`/api/clients/${id}/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: quickAddTitle,
          status: status,
          priority: 'MEDIUM'
        })
      });
      
      if (response.ok) {
        fetchClient(); // Refresh data
        setQuickAddTitle('');
        setQuickAddColumn(null);
      }
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  // Update checklist item
  const handleChecklistToggle = async (checklistId, itemId) => {
    try {
      const checklist = client.checklists.find(c => c.id === checklistId);
      const updatedItems = checklist.items.map(item => 
        item.id === itemId ? { ...item, completed: !item.completed } : item
      );
      
      const completedCount = updatedItems.filter(item => item.completed).length;
      const progress = Math.round((completedCount / updatedItems.length) * 100);
      
      const response = await fetch(`/api/checklists/${checklistId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: updatedItems,
          progress
        })
      });
      
      if (response.ok) {
        // Update local state
        setClient({
          ...client,
          checklists: client.checklists.map(c => 
            c.id === checklistId 
              ? { ...c, items: updatedItems, progress }
              : c
          )
        });
      }
    } catch (error) {
      console.error('Error updating checklist:', error);
    }
  };

  const handleClientStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      const res = await fetch(`/api/clients/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      
      if (!res.ok) throw new Error('Failed to update client status');
      
      setSuccess(`Client status updated to ${newStatus}`);
      fetchClient();
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error updating client status:', err);
      setError('Failed to update client status');
      setTimeout(() => setError(''), 3000);
    }
  };
  
  const handleChecklistItemEdit = async (checklistId, itemId, newText) => {
    try {
      const checklist = client.checklists.find(c => c.id === checklistId);
      if (!checklist) return;
      
      const updatedItems = checklist.items.map(item => 
        item.id === itemId ? { ...item, task: newText } : item
      );
      
      const res = await fetch(`/api/checklists/${checklistId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: updatedItems })
      });
      
      if (!res.ok) throw new Error('Failed to update checklist item');
      
      setEditingChecklistItem(null);
      setEditingChecklistText('');
      fetchClient();
    } catch (err) {
      console.error('Error updating checklist item:', err);
      setError('Failed to update checklist item');
    }
  };
  
  const handleAddTaskComment = async () => {
    if (!taskComment.trim() || !selectedTask) return;
    
    try {
      // Create activity for the comment
      await fetch('/api/activities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId: id,
          type: 'TASK_COMMENT',
          title: `Comment on task: ${selectedTask.title}`,
          description: taskComment,
          metadata: { taskId: selectedTask.id }
        })
      });
      
      // Update local comments state
      const newComments = taskComments[selectedTask.id] || [];
      newComments.push({
        id: Date.now(),
        text: taskComment,
        createdAt: new Date().toISOString(),
        author: 'You'
      });
      setTaskComments({
        ...taskComments,
        [selectedTask.id]: newComments
      });
      
      // Clear comment input
      setTaskComment('');
      
      // Refresh client data to get latest activities
      fetchClient();
    } catch (err) {
      console.error('Error adding comment:', err);
      setError('Failed to add comment');
    }
  };

  const handleAddChecklistItem = async (checklistId) => {
    const newItemText = prompt('Enter new checklist item:');
    if (!newItemText) return;
    
    try {
      const checklist = client.checklists.find(c => c.id === checklistId);
      if (!checklist) return;
      
      const newItem = {
        id: `item-${Date.now()}`,
        task: newItemText,
        completed: false
      };
      
      const updatedItems = [...checklist.items, newItem];
      
      const res = await fetch(`/api/checklists/${checklistId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: updatedItems })
      });
      
      if (!res.ok) throw new Error('Failed to add checklist item');
      
      fetchClient();
    } catch (err) {
      console.error('Error adding checklist item:', err);
      setError('Failed to add checklist item');
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'LOW': 'bg-gray-100 text-gray-600',
      'MEDIUM': 'bg-yellow-100 text-yellow-700',
      'HIGH': 'bg-orange-100 text-orange-700',
      'URGENT': 'bg-red-100 text-red-700'
    };
    return colors[priority] || 'bg-gray-100 text-gray-600';
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      'LOW': '↓',
      'MEDIUM': '→',
      'HIGH': '↑',
      'URGENT': '⚠'
    };
    return icons[priority] || '→';
  };

  const getStatusColor = (status) => {
    const colors = {
      'TODO': 'bg-gray-500',
      'IN_PROGRESS': 'bg-blue-500',
      'REVIEW': 'bg-yellow-500',
      'DONE': 'bg-green-500'
    };
    return colors[status] || 'bg-gray-500';
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-sm text-gray-500">Loading client details...</p>
        </div>
      </div>
    );
  }

  if (!client) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-800">Client not found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.push('/admin/dashboard/clients')}
            className="text-gray-500 hover:text-gray-700"
          >
            ← Back
          </button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              {client.companyName}
            </h1>
            {client.contactName && (
              <p className="text-gray-600">{client.contactName}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={client.status}
            onChange={handleClientStatusChange}
            className={`px-3 py-1 rounded-full text-sm font-medium border-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              client.status === 'ACTIVE' ? 'bg-green-100 text-green-800' :
              client.status === 'ONBOARDING' ? 'bg-blue-100 text-blue-800' :
              client.status === 'INACTIVE' ? 'bg-gray-100 text-gray-800' :
              'bg-purple-100 text-purple-800'
            }`}
          >
            <option value="ONBOARDING">ONBOARDING</option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
            <option value="COMPLETED">COMPLETED</option>
          </select>
          <button
            onClick={() => setShowEditClientModal(true)}
            className="text-gray-500 hover:text-gray-700"
            title="Edit client details"
          >
            ✏️
          </button>
        </div>
      </div>

      {/* Success/Error Messages */}
      {success && (
        <div className="mb-4 bg-green-50 border border-green-200 rounded-lg p-3">
          <p className="text-sm text-green-800">{success}</p>
        </div>
      )}
      
      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      {/* Client Info Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h3>
            {client.email && (
              <p className="text-sm text-gray-900 mb-1">
                <span className="text-gray-500">Email:</span> {client.email}
              </p>
            )}
            {client.phone && (
              <p className="text-sm text-gray-900 mb-1">
                <span className="text-gray-500">Phone:</span> {client.phone}
              </p>
            )}
            {client.website && (
              <p className="text-sm text-gray-900">
                <span className="text-gray-500">Website:</span> 
                <a href={client.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                  {client.website}
                </a>
              </p>
            )}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Business Details</h3>
            {client.industry && (
              <p className="text-sm text-gray-900 mb-1">
                <span className="text-gray-500">Industry:</span> {client.industry}
              </p>
            )}
            {client.contractValue && (
              <p className="text-sm text-gray-900 mb-1">
                <span className="text-gray-500">Contract Value:</span> €{client.contractValue.toFixed(2)}
              </p>
            )}
            <p className="text-sm text-gray-900">
              <span className="text-gray-500">Start Date:</span> {new Date(client.startDate).toLocaleDateString()}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-2">Statistics</h3>
            <p className="text-sm text-gray-900 mb-1">
              <span className="text-gray-500">Total Tasks:</span> {client.tasks?.length || 0}
            </p>
            <p className="text-sm text-gray-900 mb-1">
              <span className="text-gray-500">Checklists:</span> {client.checklists?.length || 0}
            </p>
            <p className="text-sm text-gray-900">
              <span className="text-gray-500">Activities:</span> {client.activities?.length || 0}
            </p>
          </div>
        </div>
        {client.notes && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Notes</h3>
            <p className="text-sm text-gray-700">{client.notes}</p>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('tasks')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'tasks' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Tasks Board
          </button>
          <button
            onClick={() => setActiveTab('checklists')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'checklists' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            SEO Checklists
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'activity' 
                ? 'border-gray-900 text-gray-900' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Activity Log
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'tasks' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">SEO Tasks Board</h2>
            <button
              onClick={() => setShowTaskModal(true)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              + Add Task
            </button>
          </div>
          
          {/* Trello-style Kanban Board */}
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Object.entries(tasks).map(([status, statusTasks]) => (
              <div
                key={status}
                className={`flex-shrink-0 w-80 bg-gray-100 rounded-lg transition-all ${
                  dragOverColumn === status ? 'ring-2 ring-blue-400 bg-blue-50' : ''
                }`}
                onDragOver={handleDragOver}
                onDragEnter={(e) => handleDragEnter(e, status)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, status)}
              >
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                        {status.replace('_', ' ')}
                      </h3>
                      <span className="bg-gray-300 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {statusTasks.length}
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        setTaskForm({ ...taskForm, status });
                        setShowTaskModal(true);
                      }}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                      title="Add task"
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
                    {statusTasks.map((task) => (
                      <div
                        key={task.id}
                        draggable={editingTask !== task.id}
                        onDragStart={(e) => handleDragStart(e, task)}
                        className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <div className="p-3">
                          {editingTask === task.id ? (
                            <textarea
                              value={editingTaskTitle}
                              onChange={(e) => setEditingTaskTitle(e.target.value)}
                              onBlur={() => handleSaveTaskTitle(task.id)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                  e.preventDefault();
                                  handleSaveTaskTitle(task.id);
                                } else if (e.key === 'Escape') {
                                  setEditingTask(null);
                                }
                              }}
                              className="w-full px-2 py-1 text-sm border border-blue-400 rounded resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                              autoFocus
                              rows={2}
                            />
                          ) : (
                            <div onClick={() => handleTaskClick(task)}>
                              <h4 
                                className="text-sm font-medium text-gray-900 mb-2 group-hover:text-blue-600"
                                onDoubleClick={(e) => {
                                  e.stopPropagation();
                                  handleStartEditingTask(task);
                                }}
                              >
                                {task.title}
                              </h4>
                              
                              {task.description && (
                                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                                  {task.description}
                                </p>
                              )}
                              
                              <div className="flex items-center gap-2 flex-wrap">
                                {task.dueDate && (
                                  <span className={`inline-flex items-center text-xs px-2 py-1 rounded ${
                                    new Date(task.dueDate) < new Date() ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-600'
                                  }`}>
                                    📅 {new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                  </span>
                                )}
                                
                                {task.priority !== 'MEDIUM' && (
                                  <span className={`inline-flex items-center text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                                    {getPriorityIcon(task.priority)} {task.priority}
                                  </span>
                                )}
                                
                                {task.category && (
                                  <span className="inline-flex items-center text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                                    {task.category}
                                  </span>
                                )}
                                
                                {task.assignee && (
                                  <span className="inline-flex items-center text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">
                                    👤 {task.assignee}
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          
                          <div className="mt-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTaskClick(task);
                              }}
                              className="text-gray-400 hover:text-gray-600 p-1"
                              title="Edit"
                            >
                              ✏️
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {statusTasks.length === 0 && (
                    <div 
                      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center text-gray-400 text-sm"
                      onDragOver={handleDragOver}
                      onDrop={(e) => handleDrop(e, status)}
                    >
                      Drop tasks here
                    </div>
                  )}
                  
                  {quickAddColumn === status ? (
                    <div className="mt-2">
                      <textarea
                        value={quickAddTitle}
                        onChange={(e) => setQuickAddTitle(e.target.value)}
                        onBlur={() => handleQuickAddTask(status)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleQuickAddTask(status);
                          } else if (e.key === 'Escape') {
                            setQuickAddColumn(null);
                            setQuickAddTitle('');
                          }
                        }}
                        placeholder="Enter a title for this task..."
                        className="w-full px-3 py-2 text-sm border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                        autoFocus
                        rows={2}
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => handleQuickAddTask(status)}
                          className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                        >
                          Add Task
                        </button>
                        <button
                          onClick={() => {
                            setQuickAddColumn(null);
                            setQuickAddTitle('');
                          }}
                          className="px-3 py-1 text-gray-600 text-sm hover:text-gray-800"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setQuickAddColumn(status);
                        setQuickAddTitle('');
                      }}
                      className="w-full mt-2 p-2 text-sm text-gray-600 hover:bg-gray-200 rounded-lg transition-colors text-left"
                    >
                      + Add a task
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'checklists' && (
        <div className="space-y-6">
          {client.checklists?.map((checklist) => (
            <div key={checklist.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {editingChecklist === checklist.id ? (
                    <input
                      type="text"
                      value={editingChecklistText}
                      onChange={(e) => setEditingChecklistText(e.target.value)}
                      onBlur={async () => {
                        if (editingChecklistText && editingChecklistText !== checklist.name) {
                          try {
                            const res = await fetch(`/api/checklists/${checklist.id}`, {
                              method: 'PUT',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ name: editingChecklistText })
                            });
                            if (res.ok) fetchClient();
                          } catch (err) {
                            console.error('Error updating checklist name:', err);
                          }
                        }
                        setEditingChecklist(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.target.blur();
                        } else if (e.key === 'Escape') {
                          setEditingChecklist(null);
                          setEditingChecklistText('');
                        }
                      }}
                      className="text-lg font-medium text-gray-900 px-2 py-1 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                      autoFocus
                    />
                  ) : (
                    <h3 
                      className="text-lg font-medium text-gray-900 cursor-pointer hover:text-blue-600"
                      onDoubleClick={() => {
                        setEditingChecklist(checklist.id);
                        setEditingChecklistText(checklist.name);
                      }}
                    >
                      {checklist.name}
                    </h3>
                  )}
                  <button
                    onClick={() => handleAddChecklistItem(checklist.id)}
                    className="text-gray-400 hover:text-gray-600 text-sm"
                    title="Add item"
                  >
                    ➕
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Progress:</span>
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${checklist.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {checklist.progress}%
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                {checklist.items?.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded group">
                    <input
                      type="checkbox"
                      checked={item.completed}
                      onChange={() => handleChecklistToggle(checklist.id, item.id)}
                      className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                    />
                    {editingChecklistItem === item.id ? (
                      <input
                        type="text"
                        value={editingChecklistText}
                        onChange={(e) => setEditingChecklistText(e.target.value)}
                        onBlur={() => handleChecklistItemEdit(checklist.id, item.id, editingChecklistText)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            handleChecklistItemEdit(checklist.id, item.id, editingChecklistText);
                          } else if (e.key === 'Escape') {
                            setEditingChecklistItem(null);
                            setEditingChecklistText('');
                          }
                        }}
                        className="flex-1 text-sm px-2 py-1 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        autoFocus
                      />
                    ) : (
                      <span 
                        className={`flex-1 text-sm cursor-pointer ${item.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}
                        onDoubleClick={() => {
                          setEditingChecklistItem(item.id);
                          setEditingChecklistText(item.task);
                        }}
                      >
                        {item.task}
                      </span>
                    )}
                    <button
                      onClick={() => {
                        setEditingChecklistItem(item.id);
                        setEditingChecklistText(item.task);
                      }}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 transition-opacity"
                      title="Edit"
                    >
                      ✏️
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {client.checklists?.length === 0 && (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-500">No SEO checklists created yet.</p>
            </div>
          )}
        </div>
      )}

      {activeTab === 'activity' && (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {client.activities?.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-xs">📋</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    {activity.description && (
                      <p className="text-sm text-gray-600">{activity.description}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.createdAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {showEditClientModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Edit Client Details</h2>
              <button
                onClick={() => setShowEditClientModal(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);
              
              // Convert contractValue to number if present
              if (data.contractValue) {
                data.contractValue = parseFloat(data.contractValue);
              }
              
              try {
                const res = await fetch(`/api/clients/${id}`, {
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data)
                });
                
                if (res.ok) {
                  setSuccess('Client details updated successfully');
                  setShowEditClientModal(false);
                  fetchClient();
                  setTimeout(() => setSuccess(''), 3000);
                } else {
                  throw new Error('Failed to update client');
                }
              } catch (err) {
                console.error('Error updating client:', err);
                setError('Failed to update client details');
                setTimeout(() => setError(''), 3000);
              }
            }}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    defaultValue={client.companyName}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Name</label>
                    <input
                      type="text"
                      name="contactName"
                      defaultValue={client.contactName}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={client.email}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      defaultValue={client.phone}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input
                      type="url"
                      name="website"
                      defaultValue={client.website}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    <input
                      type="text"
                      name="industry"
                      defaultValue={client.industry}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contract Value (€)</label>
                    <input
                      type="number"
                      name="contractValue"
                      defaultValue={client.contractValue}
                      step="0.01"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <textarea
                    name="notes"
                    defaultValue={client.notes}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowEditClientModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      
      {/* Create Task Modal */}
      {showTaskModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Create New Task</h3>
              <button
                onClick={() => setShowTaskModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xl"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <input
                  type="text"
                  value={taskForm.title}
                  onChange={(e) => setTaskForm({...taskForm, title: e.target.value})}
                  placeholder="Enter task title..."
                  className="w-full px-3 py-2 text-lg border-0 border-b-2 border-gray-200 focus:border-blue-500 focus:outline-none"
                  required
                  autoFocus
                />
              </div>
              
              <div>
                <textarea
                  value={taskForm.description}
                  onChange={(e) => setTaskForm({...taskForm, description: e.target.value})}
                  placeholder="Add a more detailed description..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-600 w-20">Priority</label>
                  <div className="flex gap-2">
                    {['LOW', 'MEDIUM', 'HIGH', 'URGENT'].map((priority) => (
                      <button
                        key={priority}
                        type="button"
                        onClick={() => setTaskForm({...taskForm, priority})}
                        className={`px-3 py-1 text-xs rounded-full transition-colors ${
                          taskForm.priority === priority 
                            ? getPriorityColor(priority)
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {getPriorityIcon(priority)} {priority}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-600 w-20">Due Date</label>
                  <input
                    type="date"
                    value={taskForm.dueDate}
                    onChange={(e) => setTaskForm({...taskForm, dueDate: e.target.value})}
                    className="px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-600 w-20">Category</label>
                  <input
                    type="text"
                    value={taskForm.category}
                    onChange={(e) => setTaskForm({...taskForm, category: e.target.value})}
                    placeholder="e.g., Technical SEO"
                    className="flex-1 px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-gray-600 w-20">Assignee</label>
                  <input
                    type="text"
                    value={taskForm.assignee}
                    onChange={(e) => setTaskForm({...taskForm, assignee: e.target.value})}
                    placeholder="Assign to..."
                    className="flex-1 px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowTaskModal(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                  disabled={isCreatingTask}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  disabled={isCreatingTask}
                >
                  {isCreatingTask ? 'Creating...' : 'Create Task'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Task Details Modal (Trello-style) */}
      {showTaskDetails && selectedTask && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-20 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📋</span>
                  <div>
                    <input
                      type="text"
                      value={selectedTask.title}
                      onChange={(e) => setSelectedTask({...selectedTask, title: e.target.value})}
                      onBlur={() => handleUpdateTask(selectedTask.id, { title: selectedTask.title })}
                      className="text-xl font-semibold bg-transparent border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 -ml-2"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      in list <span className="font-medium">{selectedTask.status.replace('_', ' ')}</span>
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setShowTaskDetails(false);
                    setSelectedTask(null);
                    setTaskComment('');
                  }}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                      <span>📝</span>
                      <span>Description</span>
                    </h3>
                    <textarea
                      value={selectedTask.description || ''}
                      onChange={(e) => setSelectedTask({...selectedTask, description: e.target.value})}
                      onBlur={() => handleUpdateTask(selectedTask.id, { description: selectedTask.description })}
                      placeholder="Add a more detailed description..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={4}
                    />
                  </div>
                  
                  {/* Activity */}
                  <div>
                    <h3 className="flex items-center space-x-2 text-sm font-semibold text-gray-700 mb-3">
                      <span>💬</span>
                      <span>Activity</span>
                    </h3>
                    <div className="space-y-3">
                      {/* Show existing comments */}
                      {taskComments[selectedTask.id]?.map((comment) => (
                        <div key={comment.id} className="flex space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">
                            {comment.author[0]}
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-3">
                              <p className="text-sm text-gray-900">{comment.text}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {comment.author} • {new Date(comment.createdAt).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {/* Add new comment */}
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-xs">
                          👤
                        </div>
                        <div className="flex-1">
                          <textarea
                            placeholder="Write a comment..."
                            value={taskComment}
                            onChange={(e) => setTaskComment(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' && e.ctrlKey) {
                                handleAddTaskComment();
                              }
                            }}
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                            rows={2}
                          />
                          <button 
                            onClick={handleAddTaskComment}
                            disabled={!taskComment.trim()}
                            className="mt-2 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Add to card</h3>
                  
                  {/* Status */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Status</label>
                    <select
                      value={selectedTask.status}
                      onChange={(e) => {
                        const newStatus = e.target.value;
                        handleUpdateTask(selectedTask.id, { status: newStatus });
                        
                        // Update local state
                        const updatedTasks = { ...tasks };
                        updatedTasks[selectedTask.status] = updatedTasks[selectedTask.status].filter(t => t.id !== selectedTask.id);
                        updatedTasks[newStatus].push({ ...selectedTask, status: newStatus });
                        setTasks(updatedTasks);
                        setSelectedTask({ ...selectedTask, status: newStatus });
                      }}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="TODO">To Do</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="REVIEW">Review</option>
                      <option value="DONE">Done</option>
                    </select>
                  </div>
                  
                  {/* Priority */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Priority</label>
                    <select
                      value={selectedTask.priority}
                      onChange={(e) => {
                        const newPriority = e.target.value;
                        setSelectedTask({...selectedTask, priority: newPriority});
                        handleUpdateTask(selectedTask.id, { priority: newPriority });
                      }}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="LOW">🔽 Low</option>
                      <option value="MEDIUM">➡️ Medium</option>
                      <option value="HIGH">🔼 High</option>
                      <option value="URGENT">⚠️ Urgent</option>
                    </select>
                  </div>
                  
                  {/* Due Date */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Due Date</label>
                    <input
                      type="date"
                      value={selectedTask.dueDate ? selectedTask.dueDate.split('T')[0] : ''}
                      onChange={(e) => {
                        const newDate = e.target.value;
                        setSelectedTask({...selectedTask, dueDate: newDate});
                        handleUpdateTask(selectedTask.id, { dueDate: newDate });
                      }}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Category</label>
                    <input
                      type="text"
                      value={selectedTask.category || ''}
                      onChange={(e) => setSelectedTask({...selectedTask, category: e.target.value})}
                      onBlur={() => handleUpdateTask(selectedTask.id, { category: selectedTask.category })}
                      placeholder="Add category..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {/* Assignee */}
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-2">Assignee</label>
                    <input
                      type="text"
                      value={selectedTask.assignee || ''}
                      onChange={(e) => setSelectedTask({...selectedTask, assignee: e.target.value})}
                      onBlur={() => handleUpdateTask(selectedTask.id, { assignee: selectedTask.assignee })}
                      placeholder="Assign to..."
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <hr className="my-4" />
                  
                  <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</h3>
                  
                  <button
                    onClick={() => handleDeleteTask(selectedTask.id)}
                    className="w-full px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                  >
                    🗑️ Delete Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}