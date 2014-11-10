djfeedback
==========

Django Feedback App

## Contributing
```
cd ~/work
git clone git@github.com:mpyatishev/djfeedback.git
cd djfeedback
virtualenv --python=python2.7 ./env
source ./env/bin/activate
pip install -r requirements.txt
python manage.py migrate
npm install
```

## Run
```
source ./env/bin/activate
python manage.py runserver
```
If you working with styles, run
```
./node_modules/.bin/gulp watch
```
Open http://127.0.0.1:8000/

## Update
```
git pull
source ./env/bin/activate
pip install -r requirements.txt
npm install
```
