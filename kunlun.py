#!/usr/bin/env python
import os
import sys


def main():
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'services.settings')
    from channels import apps
    from rest_framework import apps
    from rest_framework import serializers
    from rest_framework import decorators
    from rest_framework import authentication
    from rest_framework import permissions
    from rest_framework import parsers
    from rest_framework import negotiation
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    # if "runserver" not in sys.argv:
        # sys.argv += ["runserver", "0.0.0.0:9000", "--noreload"]
        # sys.argv += ["runserver", "0.0.0.0:9000"]
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
