import openai
import os
import sys
from flask import Flask, render_template, request
  
openai.api_key = os.environ['OPENAI_API_KEY']

def generate_tutorial(components):
  response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": f"Suggest me a recipe using the items listed as available. Make sure you have a nice name for the recipe listed at the start. Also include funny version of the name of the recipe of the following line. Then share the recipe in step-by-step manner. In the end write a fun fact about the recipe or any of the items used in the recipe. Here are the items available: {components},Chilly Powder, Haldi, Water, Tomato Ketchup, Garam Masala, Oil"
        
        }])

  return response['choices'][0]['message']['content']

app = Flask(__name__)
  
@app.route('/', methods=['GET', 'POST'])
def hello():
  output = ""
  if request.method == 'POST':
    components = request.form['components']
    output = generate_tutorial(components)

# This is a HTML template for a Custom Recipe Generator web page. It includes a form for users to input a list of ingredients/items they have, and two JavaScript functions for generating a recipe based on the input and copying the output to the clipboard. The template uses the Bootstrap CSS framework for styling.

  return render_template('webpage.html',output=output)

@app.route('/generate', methods=['POST'])

def generate():
  components = request.form['components']
  output = generate_tutorial(components)
  return output

if __name__ == '__main__':
  app.run(host='0.0.0.0', port=8080, debug=True)