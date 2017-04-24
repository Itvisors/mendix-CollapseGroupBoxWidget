/*jslint browser:true, nomen: true */
/*global mendix, mx, mxui, define, require, console, logger */
/**
	Widget Name
	========================

	@file      : CollapseGroupBoxWidget.js
	@version   : 1.0
	@author    : Marcel Groeneweg
	@date      : 24-4-2017
	@copyright : ITvisors
	@license   : Apache License, Version 2.0, January 2004

	Documentation
	=============
	Collapse or expand all groupboxes within the parent of this widget

*/
define([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",
    "dojo/dom",
    "dojo/query",
    "dojo/dom-class",
    "dojo/_base/lang"

], function (declare, _WidgetBase, dom, domQuery, domClass, lang) {
    "use strict";

    // Declare widget.
    return declare("CollapseGroupBoxWidget.widget.CollapseGroupBoxWidget", [ _WidgetBase ], {

        /**
         * Internal variables.
         * ======================
         */

        _collapseAllButton                      : null,
        _expandAllButton                        : null,

        // Extra variables


        /**
         * Mendix Widget methods.
         * ======================
         */

        // DOJO.WidgetBase -> PostCreate is fired after the properties of the widget are set.
        postCreate: function () {

            // postCreate
            // console.log("CollapseGroupBoxWidget - postCreate");

            // Load CSS ... automaticly from ui directory

            // Setup widgets
            this._setupWidget();

            // Create childnodes
            this._createChildNodes();

            // Setup events
            this._setupEvents();

        },

        // DOJO.WidgetBase -> Startup is fired after the properties of the widget are set.
        startup: function () {

            // postCreate
            // console.log("CollapseGroupBoxWidget - startup");
        },

        uninitialize: function () {
        },

        /**
         * Extra setup widget methods.
         * ======================
         */
        _setupWidget: function () {

        },

         // Create child nodes.
        _createChildNodes : function () {
            // console.log("CollapseGroupBoxWidget - createChildNodes");

            this._collapseAllButton = this._createButton(this.collapseAllCaption, this.collapseAllClass, this.collapseAllTabIndex);
            this.domNode.appendChild(this._collapseAllButton);

            this._expandAllButton = this._createButton(this.expandAllCaption, this.expandAllClass, this.expandAllTabIndex);
            this.domNode.appendChild(this._expandAllButton);

        },

        // Attach events to newly created nodes.
        _setupEvents: function () {

            // console.log("CollapseGroupBoxWidget - setup events");

            this._collapseAllButton.onclick = lang.hitch(this, this._collapseAll);
            this._expandAllButton.onclick = lang.hitch(this, this._expandAll);

        },

        _collapseAll: function (evt) {
            this._processEvent(true);
        },

        _expandAll: function (evt) {
            this._processEvent(false);
        },

        _processEvent: function (isCollapseRequested) {
            var
                isCollapsed,
                query;

            // console.log("CollapseGroupBoxWidget - Collapse all");
            query = ".mx-groupbox.mx-groupbox-collapsible";
            if (this.groupboxClass) {
                query += "." + this.groupboxClass;
            }
            domQuery(query, this.domNode.parentElement).forEach(function (groupboxElement) {
                isCollapsed = domClass.contains(groupboxElement, "collapsed");
                if (isCollapsed !== isCollapseRequested) {
                    domQuery("h2.mx-groupbox-header", groupboxElement).forEach(function (headerElement) {
                        headerElement.click();
                    });
                }
            });
        },

        _createButton: function (buttonCaption, buttonClass, tabIndex) {
            var button;

            button = document.createElement("button");
            button.setAttribute("type", "button");
            domClass.add(button, "btn mx-button " + buttonClass);
            if (buttonCaption) {
                button.innerHTML = buttonCaption;
            }
            if (tabIndex) {
                button.setAttribute("tabindex", tabIndex);
            }
            return button;
        }
    });
});

require(["CollapseGroupBoxWidget/widget/CollapseGroupBoxWidget"]);
