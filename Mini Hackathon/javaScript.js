var most_frequent_words = ["the","of","and","to","a","in","for","is","on","that","by","this","with","i","you","it","not","or","be","are","from","at","as","your","all","have","new","more","an","was","we","will","can","us","about","if","my","has","but","our","one","other","do","no","they","he","up","may","what","which","their"];
function wordcloud()
{
	
	
	var textdata=(document.getElementById("data").value);
	var tokens = textdata.trim().split(/\s+/);
	var filtered = tokens.filter(isFrequent);

	var send_data = filtered.join(" ");
	link = "https://quickchart.io/wordcloud?text="+send_data;
	document.getElementById("img1").src = link;
}
function isFrequent(word)
{
	var lower_case = word.toLowerCase();
	if(most_frequent_words.includes(lower_case) == true)
	{
		
		return false;
	}
	else{
		return true;
	}
}

function count()
{
	var txt = (document.getElementById("data").value);
	var tokens = txt.trim().split(/\s+/);
	document.getElementById("now").innerHTML = tokens.length;
	characters = tokens.join();
	document.getElementById("noc").innerHTML = characters.length;
	char_or_word = document.getElementById("cw").value;
	var k = document.getElementById("num").value;
	console.log(k);
	
		if(k!=0){
		if(char_or_word == "characters")
		{
			var d = k-(characters.length);
			if(d<0)
			{
				var result = "Characters:"+d;
				var alert_color = result.fontcolor("red");
				document.getElementById("rem").innerHTML = alert_color;
			}
			else
			{
				document.getElementById("rem").innerHTML = "Characters:"+d;
			}
		}
		else
		{
			var d = k-(tokens.length);
			if(d<0)
			{
				var result = "Words:"+d;
				var alert_color = result.fontcolor("red");
				document.getElementById("rem").innerHTML = alert_color;
			}
			else
			{
				document.getElementById("rem").innerHTML = "Words:"+d;
			}
		}}
}