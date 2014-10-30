mendix-CollapseGroupBoxWidget
=============================

Collapse/expand multiple groupbox widgets

##Description
Provide the user with one button to collapse or expand many groupboxes at the same time.

##Typical usage scenario
A page with many groupboxes and the user wants to collapse or expand them all at the same time.

##Features and limitations
- The widget shows the collapse and expand buttons, which can be styled using CSS
- Caption is translatable
- Optionally, a groupbox class can be specified. Only groupboxes with that class will be included. 

##Dependencies
Mendix 5

##Configuration

Place the widget in the same container or higher as the groupboxes that need to be collapsed or expanded.

The widget wil show buttons to collapse and expand all groupboxes in the same parent or in any child of the parent. The caption and class may be set on the properties for each button.

If not all groupboxes must be included, set a class on all groupboxes that must be included.
Specify the same class as Groupbox class on the widget. Note that the class does not need to exist in any CSS file. 

Set the tabindex to -1 to prevent the buttons from receiving focus.
 