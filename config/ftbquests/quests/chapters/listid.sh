#!/bin/bash

INPUT_FILE="$1"
OUTPUT_FILE="output"

if [ -z "$INPUT_FILE" ]; then
    echo "请指定输入文件"
    exit 1
fi

if [ ! -f "$INPUT_FILE" ]; then
    echo "文件不存在: $INPUT_FILE"
    exit 1
fi

grep -oE '\b[0-9A-Z]{16}\b' "$INPUT_FILE" >> "$OUTPUT_FILE"

echo "结果已写入 $OUTPUT_FILE"
