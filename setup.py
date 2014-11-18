#!/usr/bin/env python
# -*- coding: utf-8 -*-

from setuptools import setup, find_packages


install_requires = [
    'Django >= 1.6',
    'django-compressor >= 1.4',
    'django-bootstrap3',
    'python-redmine',
    'django-require',
]


setup(
    name='djfeedback',
    version='0.0.1',
    description='django feedback app',
    author='mpyatishev',
    author_email='mpyatishev@gmail.com',
    packages=find_packages(exclude=[
        'example',
    ]),
    include_package_data=True,
    license="MIT",
    url='https://github.com/mpyatishev/djfeedback',
    classifiers=[
        "Intended Audience :: Developers",
        "Development Status :: 5 - Production/Development",
        "License :: OSI Approved :: MIT",
        "Programming Language :: Python :: 2.7",
        "Topic :: Development",
    ],
    zip_safe=False,
    install_requires=install_requires
)
