<h2> Text-Analyzer</h2>
<h3>Deploying The website.</h3>
To get the website running on the local pc download the zip folder and unzip the folder and open "Word Cloud.html" file with any browser application.
<h3>Who needs this Website.</h3>
The Text-Analyzer is used by people who need to submit any abstracts for college or any contests.It can also be used by professional writers.It can be used to analyze what you are writing by visualizing your writing in a word cloud
<h3>How to use the Website?</h3>
The website is both responsive and interactive. Write the data on the text box. In case if you have any limitations based on number of words and characters.
Give the maximum number of words and characters you can write in the total text box placed above the text area
Press count to see number of words and characters written so far.
The Show word cloud button allows you to visualize the data you have written. So you will know what words are used most. The most frequent noun or adjective (not verbs and others)is big and the rest small in word cloud image. So you will know what you have discussed and how much you have discussed about it in your writing.
<h3>What did I Do?</h3>
I counted the number of words and characters in the given text using javascript. I used Bootstrap and other css functions to style the web page.The word cloud, I passed the data to the word cloud API(free online resource).But before passing the data I have to process the data so that the most common words like "the","and","is" etc are ignored in word cloud. The main motive of doing this is When the user want to analyze the data, He don't want see the words like "is" and "it" are his frequent words as to frame sentences these are necessary. He wants to see which nouns or adjectives he talked about in writing.To do this I have used the data from "Kaggle" to find out the top50 most frequent words in english.I removed those words from the data and sent the remaining data to API. Finally I collected the word cloud image from the API and displayed the image.
