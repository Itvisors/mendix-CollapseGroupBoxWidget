/**
	Widget Name
	========================

	@file      : CollapseGroupBoxWidget.js
	@version   : 1.0
	@author    : Marcel Groeneweg
	@date      : 30-10-2014
	@copyright : Synobsys
	@license   : Apache License, Version 2.0, January 2004

	Documentation
	=============
	Collapse or expand all groupboxes within the parent of this widget

*/
dojo.provide('CollapseGroupBoxWidget.widget.CollapseGroupBoxWidget');

dojo.declare('CollapseGroupBoxWidget.widget.CollapseGroupBoxWidget', [ mxui.widget._WidgetBase ], {

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
		'use strict';

        // postCreate
        console.log('CollapseGroupBoxWidget - postCreate');

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
        'use strict';

        // postCreate
        console.log('CollapseGroupBoxWidget - startup');
    },

	unintialize: function () {
		'use strict';
	},

	/**
	 * Extra setup widget methods.
	 * ======================
	 */
	_setupWidget: function () {
		'use strict';

	},

	 // Create child nodes.
	_createChildNodes : function () {
		'use strict';
        console.log('CollapseGroupBoxWidget - createChildNodes');

        this._collapseAllButton = this._createButton(this.collapseAllCaption, this.collapseAllClass);
        this.domNode.appendChild(this._collapseAllButton);

        this._expandAllButton = this._createButton(this.expandAllCaption, this.expandAllClass);
        this.domNode.appendChild(this._expandAllButton);

	},

	// Attach events to newly created nodes.
    _setupEvents: function () {
        'use strict';

        console.log('CollapseGroupBoxWidget - setup events');

        this._collapseAllButton.onclick = dojo.hitch(this, this._collapseAll);
        this._expandAllButton.onclick = dojo.hitch(this, this._expandAll);

	},

    _collapseAll: function (evt) {
        'use strict';
        this._processEvent(true);
    },

    _expandAll: function (evt) {
        'use strict';
        this._processEvent(false);
    },
    
    _processEvent: function (isCollapseRequested) {
        'use strict';
        var
            isCollapsed,
            query;

        console.log('CollapseGroupBoxWidget - Collapse all');
        query = '.mx-groupbox.mx-groupbox-collapsable';
        if (this.groupboxClass) {
            query += '.' + this.groupboxClass;
        }
        dojo.query(query, this.domNode.parentElement).forEach(function (groupboxElement) {
            isCollapsed = dojo.hasClass(groupboxElement, 'collapsed');
            if (isCollapsed !== isCollapseRequested) {
                dojo.query('h2.mx-groupbox-header', groupboxElement).forEach(function (headerElement) {
                    headerElement.click();
                });
            }
        });
    },

    _createButton: function (buttonCaption, buttonClass) {
        'use strict';
        var button;

        button = document.createElement('button');
        button.setAttribute('type', 'button');
        dojo.addClass(button, 'btn mx-button btn-default ' + buttonClass);
        if (buttonCaption) {
            button.innerHTML = buttonCaption;
        }
        return button;
    }

});