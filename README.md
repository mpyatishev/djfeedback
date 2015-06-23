djfeedback
==========

Django Feedback App

## Install

Copy `.bowerrc` and `bower.json` to your project.

Install bower components:
```sh
bower install
```

See `example/templates/main.html` and `example/settings.py`

## Contributing
### Install env
```sh
cd ~/work
git clone git@github.com:mpyatishev/djfeedback.git
cd djfeedback
virtualenv --python=python2.7 ./env
source ./env/bin/activate
pip install -r requirements.txt
python manage.py migrate
npm install
```

### Run
```sh
source ./env/bin/activate
python manage.py runserver
```
If you working with styles, run
```sh
./node_modules/.bin/gulp watch
```
Open http://127.0.0.1:8000/

### Build changed styles
```sh
npm run buildcss
```

### Build changed js
```sh
npm run buildjs
```

### Update
```sh
git pull
source ./env/bin/activate
pip install -r requirements.txt
npm install
```
