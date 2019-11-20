#!/usr/bin/env bash

set -e

bolt workspaces exec \
    --parallel-nodes \
    -- \
    babel \
        --extensions .ts,.tsx,.js,.jsx \
        --root-mode upward \
        --source-maps true \
        -Dd dist \
        src 
    
