# Amaranthus (Working Title)

![Ow](design/Wireframe_Diagram.png "Title text")

'Amaranthus' is a  document database and 
reference tool focused on intelligent cross-referencing, data visualisation,
flexibility, and transparency.

It uses flat file serialisation to store information in a way that is both
readable and accessable, but also allows for aggregation, processing and searching. 
The good parts of both worlds.

It uses [Electron](https://electronjs.org/), [React](https://reactjs.org/) and 
[D3.JS](https://d3js.org/) to provide a cross-platform interface and visualisation, 
and a custom backend written on top of Node to handle document processing.

## DESIGN

### Problem statement:

How might we organise and store information so that it can be visualised easily? How might
we store this information easily and quickly.

### Target audience/use cases:

* Academics
* Visualisations
* Research

### Design priorities:

1. Fast and easy.
2. Flexible, requiring as little upkeep as possible.
3. Open and transparent, avoid data lock-in, using flat file.


## PRIORITIES

### Fast and Easy

The system should be able to interpret complex objects using simple parsing, an "author"
field should not require the user to input the last name and first name seperately. Instead,
the user should be able to type generic input into a general text field and have 
the result cast into the appropriate type.

...