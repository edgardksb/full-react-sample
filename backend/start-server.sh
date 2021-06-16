#!/usr/bin/env bash
(cd django; gunicorn full-react-sample.wsgi --user www-data --bind 0.0.0.0:8000 --workers 3) &
nginx -g "daemon off;"