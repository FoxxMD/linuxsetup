#!/bin/bash
#
# Creates a tunnel that can used as a socks5 proxy for browsers and such
# Usage: ./socks5.sh user ip
# Socks5 proxy accessible at localhost:9999
ssh -ND 9999 $1@$2