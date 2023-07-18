# This is the main script.
from flask import Flask, jsonify, render_template

import pandas as pd
from sqlalchemy import create_engine

# Create database connection
connection_string= 'postgresql+psycopg2://postgres:jesfer2011@localhost:5432/challenge3'
engine = create_engine(connection_string)

app = Flask(__name__)

@app.route('/')
def main():

    #return '<h1>Hola Mundo</h1>'
    return render_template('index.html')


@app.route('/api')
def api():
    # Return the AVG of income for man zodiac
    response = pd.read_sql('select zodiac_sign_man, avg(monthly_income_partner_man_peso) from divorces group by zodiac_sign_man', engine)
    response = {
        'labels': response['zodiac_sign_man'].tolist(),
        'values': response['avg'].tolist(),
    }

    # Return the AVG of income for woman zodiac
    response1 = pd.read_sql('select zodiac_sign_woman, avg(monthly_income_partner_woman_peso) from divorces group by zodiac_sign_woman', engine)
    response1 = {
        'labels1': response1['zodiac_sign_woman'].tolist(),
        'values1': response1['avg'].tolist(),
    }
    response3 = pd.read_sql("select level_of_education_partner_man, count(type_of_divorce) from divorces group by level_of_education_partner_man", engine)
    response3 = {
        'labels3': response3['level_of_education_partner_man'].to_list(),
        'values3': response3['count'].to_list(),
    }
    response4 = pd.read_sql("select age_partner_man, count(type_of_divorce) from divorces group by age_partner_man ORDER BY age_partner_man ASC", engine)
    response4 = {
        'labels4': response4['age_partner_man'].to_list(),
        'values4': response4['count'].to_list(),
    }
    response5 = pd.read_sql("select age_partner_woman, count(divorce_date) from divorces group by age_partner_woman ORDER BY age_partner_woman ASC",engine)
    response5 ={
        'labels5': response5['age_partner_woman'].to_list(),
        'values5': response5['count'].to_list()
    }

    
    return {'response': response, 'response1': response1,'response3': response3,'response4': response4,'response5': response5}


if __name__ == '__main__':
    app.run(debug=False)
