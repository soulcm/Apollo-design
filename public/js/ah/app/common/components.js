define(["dojo/_base/declare",
		'dojo/_base/lang',
		"dojo/text!./templates/components.html",
	  	"ah/util/common/ModuleBase",
        "ah/config/siderConfig",
        "ah/app/common/__doctpl"], function(declare, lang, template, ModuleBase, configs, __doctpl) {

	return declare("ah/app/common/component", [ ModuleBase, __doctpl ], {

		templateString : template,

		events : [
		],

        /*
		_setActiveAttr : function(widget){
			if(!widget) return;
			
			var cur = this.get('active');

			cur && (cur.domNode.style.display = 'none');
			widget.domNode.style.display = '';

			this._set('active', widget);
		},
        */

		postMixInProperties : function(){
			this.inherited(arguments);

			this._mods = {};

            this.__items = configs.components.items;
			this.__siderClickItem = lang.hitch(this, this._handleToggleMod);
		}

        /*
		_handleToggleMod : function(mod){
			var m = this._mods[mod],
				url = 'ah/app/design/'+mod;
			
			if(!m){
				require([url], lang.hitch(this, function(Kla){
					var o;

					this._mods[mod] = o = new Kla();
					o.placeAt(this.area, 'last');

					this.set('active', o);

				}));

				return;
			}
			
			this.set('active', m);

		}
        */
	
	});

});
