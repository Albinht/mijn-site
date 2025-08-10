#!/bin/bash

# List of files to update
files=(
  "src/app/api/activity/recent/route.js"
  "src/app/api/activity/route.js"
  "src/app/api/analytics/overview/route.js"
  "src/app/api/analytics/pages/route.js"
  "src/app/api/analytics/sources/route.js"
  "src/app/api/analytics/track/route.js"
  "src/app/api/articles/[id]/route.js"
  "src/app/api/articles/generate/route.js"
  "src/app/api/articles/route.js"
  "src/app/api/content/[id]/route.js"
  "src/app/api/content/route.js"
  "src/app/api/settings/[category]/route.js"
  "src/app/api/settings/route.js"
)

for file in "${files[@]}"; do
  echo "Updating $file..."
  # Replace the import and instantiation
  sed -i '' "s|import { PrismaClient } from '@prisma/client';|import prisma from '@/lib/prisma';|g" "$file"
  sed -i '' "/const prisma = new PrismaClient();/d" "$file"
done

echo "All files updated!"