# Regular Expressions
A sequence of characters expressing a pattern for further matching in a long string

## Creating Regular Expressions
     There are two ways :
     By using regular expression literals ["/ab/"]
     By using constructor to match the text new RegExp("ab")

## RegEx Properties
    - Property      ||  Description
    - .flags	    ||  Returns a string containing the flags of the RegExp object.
    - .dotAll	    ||  Does . match newlines or not?
    - .global	    ||  Does the RegExp object test against all matches in a string, or only the first?
    - .hasIndices   ||  Does the Regular Expression result expose the start and end indices of captured substrings?
    - .ignoreCase   ||  Does the RegExp object ignore case when performing a match?
    - .multiline    ||  Does the RegExp object perform matches across multiple lines?
    - .source	    ||  The text of the pattern used by the RegExp object.
    - .sticky	    ||  Is the search sticky? (Does the next match have to occur at lastIndex, or can we match the next occurrence after lastIndex?)
    - .unicode      ||  Are Unicode features enabled?
    - .lastIndex    ||  The index at which to start the next match.

## RegEx Methods
- Method	    ||      Description
- .exec(str)	||      Execute a search on its str string parameter.
- .test(str)	||      Tests for a match in its str string parameter.

## String Methods that can use RegExp Options

    - Method                ||	    Description
    - .match(re)	        ||      Returns the array result of match(es) against the string.
    - .matchAll(re)         ||     	Returns an iterator of all the matches found within the string.*
    - .replace(re, substr)  ||	    Replaces match(es) in the string with a given substring, substr.
    - .search(re)           ||     	Returns the index of the first match in the string.
    - .split(re)	        ||      Splits string into an array using the match(es) as a delimiter.

## Flags
    - Flag	||       Description
    - g	    ||      Performs a global match, finding all matches rather than just the first.
    - i	    ||      Makes matches case-insensitive. Matches both uppercase and lowercase.
    - m	    ||      Performs multiline matches. (Changes behavior of ^,$)
    - s	    ||      Allows . to match newline characters.
    - u	    ||      Enables Unicode support.
    - y	    ||      Matches are sticky, looking only at exact position in the text.

### Common Examples are listed in the code
- [examples.js](./examples.js)


#### Source From
 - [Codeacademy](https://www.codecademy.com/resources/docs/javascript/regexp)