aliceText
=========
Exercice: 
Implement a predictive text input system (as used by
cellphones using a numeric keypad), using JS, backbone, HTML and bootstrap. Your program should take a
training dataset file (the text of Alice in Wonderland in this case)
and a numeric input, e.g. "227", and then output the set of words
corresponding to the input, e.g. "car", "cap", "bar", in order of word
popularity in the corpus. No additional language
dictionaries/datasets should be used.


Extra credit: Also output the five most popular prefix matches, e.g.
i.e. longer words that have the input as a prefix, e.g. for "227" we
might have "carp", "bartender", etc.

Here's an example:

> upload file alice_in_wonderland.txt
> Enter input 729 via text field

Output: 

Exact matches for 729:
say
saw
paw
raw
Prefix matches for 729:
saying

The number to letter mapping to use is the standard phone keypad
number -> alphabet mapping, reproduced here for convenience:

2 abc
3 def
4 ghi
5 jkh
6 mno
7 pqrs
8 tuv
9 wxyz