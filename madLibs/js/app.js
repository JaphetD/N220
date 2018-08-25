
var dvStoryOutput = document.querySelector("#dvStoryOutput");

var storyTemplate = "{{Name}} {{verb}} the {{food}}";

var newString = storyTemplate.replace("{{Name}}", "{{verb}}", "{{food}}");

console.log(newString);

var story=0;

//Load in any currently saved story and display it
if(localStorage['story'] !=null) {
    //there is a story currently stored on the computer..
    story = localStorage['story'];
}

dvStoryOutput.innerHTML=story;

console.log(storyTemplate);

//finish the makestory function
function makeStory() {
    story++;
    localStorage['story'] = story;
    dvStoryOutput.innerHTML=story;
    console.log(story);
}


