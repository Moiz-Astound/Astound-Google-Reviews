#!/bin/bash

# Set your GCP project ID
PROJECT_ID="your-project-id"
SERVICE_NAME="google-reviews-dashboard"
REGION="us-central1"

# Build and deploy
gcloud builds submit --tag gcr.io/$PROJECT_ID/$SERVICE_NAME
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/$SERVICE_NAME \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --port 8080
