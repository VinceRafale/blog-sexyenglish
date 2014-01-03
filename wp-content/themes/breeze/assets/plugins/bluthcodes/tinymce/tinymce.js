(function() {  

    var fullurl;
    tinymce.create('tinymce.plugins.dropcap', {  
        init : function(ed, url) {  
            fullurl = url;
            ed.addButton('dropcap', {  
                title : 'Add a Dropcap',  
                image : url+'/dropcap.png',  
                onclick : function() {  
                     ed.selection.setContent('[dropcap background="yes" color="#333333" size="50px"]' + tinyMCE.activeEditor.selection.getContent() + '[/dropcap]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('dropcap', tinymce.plugins.dropcap); 

    tinymce.create('tinymce.plugins.pullquote', {  
        createControl: function(n, cm) {
            switch (n) {
                case 'pullquote':
                    var c = cm.createSplitButton('pullquotesplitbutton', {
                        title : 'PullQuote',
                        image : fullurl+'/pullquote.png',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[pullquote align="left"]' + tinyMCE.activeEditor.selection.getContent() + '[/pullquote]');  
                        }
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'PullQuote Styles', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Left', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[pullquote align="left"]' + tinyMCE.activeEditor.selection.getContent() + '[/pullquote]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Left w/background', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[pullquote align="left" background="on"]' + tinyMCE.activeEditor.selection.getContent() + '[/pullquote]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Right', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[pullquote align="right"]' + tinyMCE.activeEditor.selection.getContent() + '[/pullquote]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Right w/background', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[pullquote align="right" background="on"]' + tinyMCE.activeEditor.selection.getContent() + '[/pullquote]');  
                            tinyMCE.activeEditor.focus();
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }
            return null;
        }
    });  
    tinymce.PluginManager.add('pullquote', tinymce.plugins.pullquote); 

    tinymce.create('tinymce.plugins.alert', {  
        createControl: function(n, cm) {
            switch (n) {
                case 'alert':
                    var c = cm.createSplitButton('alertsplitbutton', {
                        title : 'Alert',
                        image : fullurl+'/alert.png',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                        }
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Alert Styles', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Blue', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Red', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="red"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Green', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="green"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Yellow', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="yellow"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Purple', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="purple"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dar kred', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="darkred"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Brown', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="brown"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grey', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="grey"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dark', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="dark"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grass', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="grass"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Pink', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[alert style="pink"]' + tinyMCE.activeEditor.selection.getContent() + '[/alert]');  
                            tinyMCE.activeEditor.focus();
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }
            return null;
        }
    });   
    tinymce.PluginManager.add('alert', tinymce.plugins.alert); 


    tinymce.create('tinymce.plugins.label', {  
        createControl: function(n, cm) {
            switch (n) {
                case 'label':
                    var c = cm.createSplitButton('labelsplitbutton', {
                        title : 'Label',
                        image : fullurl+'/label.png',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                        }
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Label Styles', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Blue', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Red', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="red"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Green', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="green"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Yellow', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="yellow"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Purple', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="purple"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dar kred', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="darkred"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Brown', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="brown"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grey', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="grey"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dark', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="dark"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grass', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="grass"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Pink', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[label style="pink"]' + tinyMCE.activeEditor.selection.getContent() + '[/label]');  
                            tinyMCE.activeEditor.focus();
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }
            return null;
        }
    });  
    tinymce.PluginManager.add('label', tinymce.plugins.label); 


    tinymce.create('tinymce.plugins.badge', {  
        createControl: function(n, cm) {
            switch (n) {
                case 'badge':
                    var c = cm.createSplitButton('badgesplitbutton', {
                        title : 'Badge',
                        image : fullurl+'/badge.png',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                        }
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Badge Styles', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Blue', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Red', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="red"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Green', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="green"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Yellow', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="yellow"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Purple', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="purple"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dar kred', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="darkred"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Brown', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="brown"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grey', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="grey"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dark', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="dark"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grass', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="grass"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Pink', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[badge style="pink"]' + tinyMCE.activeEditor.selection.getContent() + '[/badge]');  
                            tinyMCE.activeEditor.focus();
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }
            return null;
        }
    });  
    tinymce.PluginManager.add('badge', tinymce.plugins.badge); 


    tinymce.create('tinymce.plugins.well', {  
        init : function(ed, url) {  
            ed.addButton('well', {  
                title : 'Add a Well',  
                image : url+'/well.png',  
                onclick : function() {  
                     ed.selection.setContent('[well]Well content goes here[/well]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('well', tinymce.plugins.well); 


    tinymce.create('tinymce.plugins.button', {  
        createControl: function(n, cm) {
            switch (n) {
                case 'button':
                    var c = cm.createSplitButton('buttonsplitbutton', {
                        title : 'Button',
                        image : fullurl+'/button.png',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="#" style="blue" size="default" block="false" target="_blank" icon="check"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                        }
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Button Types', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Blue', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="blue"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Red', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="red"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Green', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="green"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Yellow', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="yellow"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Purple', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="purple"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dark Red', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="darkred"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Brown', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="brown"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grey', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="grey"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Dark', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="dark"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Grass', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="grass"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Pink', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" style="pink"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Large Button', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" size="large"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Small Button', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" size="small"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Mini Button', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" size="mini"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Block Button', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" block="true"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Button w/Icon', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" icon="check-1"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                        m.add({title : 'Open in new window', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[button url="http://" target="_blank"]' + tinyMCE.activeEditor.selection.getContent() + '[/button]');  
                            tinyMCE.activeEditor.focus();
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }
            return null;
        }
    });  
    tinymce.PluginManager.add('button', tinymce.plugins.button);


    tinymce.create('tinymce.plugins.blockquote', {  
        init : function(ed, url) {  
            ed.addButton('blockquote', {  
                title : 'Add a Blockquote',  
                image : url+'/blockquote.png',  
                onclick : function() {  
                     ed.selection.setContent('[blockquote source="Name of the source"]Blockquote text goes here[/blockquote]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('blockquote', tinymce.plugins.blockquote);


    tinymce.create('tinymce.plugins.syntax', {  
        init : function(ed, url) {  
            ed.addButton('syntax', {  
                title : 'Add a Syntax highlighting',  
                image : url+'/syntax.png',  
                onclick : function() {  
                     ed.selection.setContent('[syntax type="html|php|js|css"]Code you want to show goes here[/syntax]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('syntax', tinymce.plugins.syntax);


    tinymce.create('tinymce.plugins.tooltip', {  
        init : function(ed, url) {  
            ed.addButton('tooltip', {  
                title : 'Add a Tooltip',  
                image : url+'/tooltip.png',  
                onclick : function() {  
                     ed.selection.setContent('[tooltip text="Tooltip Text goes here" trigger="hover|click"]Text goes here[/tooltip]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('tooltip', tinymce.plugins.tooltip); 

    tinymce.create('tinymce.plugins.progress', {  
        init : function(ed, url) {  
            ed.addButton('progress', {  
                title : 'Add a Progress bar',  
                image : url+'/progress.png',  
                onclick : function() {  
                     ed.selection.setContent('[progress length="50" color="#3bd2f8"]Skill[/progress]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('progress', tinymce.plugins.progress);  


    tinymce.create('tinymce.plugins.popover', {  
        init : function(ed, url) {  
            ed.addButton('popover', {  
                title : 'Add a Popover',  
                image : url+'/popover.png',  
                onclick : function() {  
                     ed.selection.setContent('[popover title="Popover Title goes here" trigger="hover|click" placement="top|bottom|left|right" text="Popover content goes here"]Text goes here[/popover]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('popover', tinymce.plugins.popover);  

    tinymce.create('tinymce.plugins.tabs', {  
        init : function(ed, url) {  
            ed.addButton('tabs', {  
                title : 'Add a Tabbed Element',  
                image : url+'/tabs.png',  
                onclick : function() {  
                     ed.selection.setContent('[tabs-header]<br />[tabs-header-group open="one" active="yes"] HEADER ITEM [/tabs-header-group]<br />[tabs-header-group open="two"] HEADER ITEM [/tabs-header-group]<br />[/tabs-header]<br /><br />[tabs-content]<br />[tabs-content-group id="one" active="yes"]' + tinyMCE.activeEditor.selection.getContent() + '[/tabs-content-group]<br />[tabs-content-group id="two"][/tabs-content-group]<br />[/tabs-content]');  
                }  
            });  
        },  
        createControl : function(n, cm) {  
            return null;  
        },  
    });  
    tinymce.PluginManager.add('tabs', tinymce.plugins.tabs);  

    tinymce.create('tinymce.plugins.accordion', {  
        init : function(ed, url) {  
            fullurl = url;
            ed.addButton('accordion', {  
                title : 'Add Accordion',  
                image : url+'/accordion.png',  
                onclick : function() {  
                     ed.selection.setContent('[accordion]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[/accordion]');  
                  }  
            });  
        },   
        createControl: function(n, cm) {
            switch (n) {
                case 'accordion':
                    var c = cm.createSplitButton('accordionsplitbutton', {
                        title : 'Accordion',
                        image : fullurl+'/accordion.png',
                        onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[accordion]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[/accordion]');  
                        }
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Accordion Style', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Dark', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[accordion]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group title="Title goes here"]Text goes here[/accordion-group]<br />[/accordion]');  
                        }});
                        m.add({title : 'Light', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[accordion]<br />[accordion-group style="light-grey" title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group style="light-grey" title="Title goes here"]Text goes here[/accordion-group]<br />[accordion-group style="light-grey" title="Title goes here"]Text goes here[/accordion-group]<br />[/accordion]');  
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }

            return null;
        }
    });  
    tinymce.PluginManager.add('accordion', tinymce.plugins.accordion);  
    
    tinymce.create('tinymce.plugins.divider', {  
        init : function(ed, url) {  
            ed.addButton('divider', {  
                title : 'Add a Divider',  
                image : url+'/divider.png',  
                onclick : function() {  
                     ed.selection.setContent('[divider type="white|thin|thick|short|dotted|dashed" spacing="10"]');  
                }  
            });  
        },  
        createControl: function(n, cm) {
            switch (n) {
                case 'divider':
                    var c = cm.createSplitButton('dividersplitbutton', {
                        title : 'Divider',
                        image : fullurl+'/divider.png',
                        onclick : function() {}
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Divider', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'White', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="white"]');  
                        }});
                        m.add({title : 'Thin', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="thin"]');  
                        }});
                        m.add({title : 'Thick', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="thick"]');  
                        }});
                        m.add({title : 'Short', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="short"]');  
                        }});
                        m.add({title : 'Dotted', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="dotted"]');  
                        }});
                        m.add({title : 'Dashed', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="dashed"]');  
                        }});
                        m.add({title : 'Thin w/big spacing', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[divider type="dashed" spacing="25"]');  
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }

            return null;
        }
    });  
    tinymce.PluginManager.add('divider', tinymce.plugins.divider); 

    tinymce.create('tinymce.plugins.columns', {
        createControl: function(n, cm) {
            switch (n) {
                case 'columns':
                    var c = cm.createSplitButton('mysplitbutton', {
                        title : 'Columns',
                        image : fullurl+'/columns.png',
                        onclick : function() {}
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Columns', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Half', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[two_first]<br /><br />[/two_first][two_second]<br /><br />[/two_second]');  
                        }});

                        m.add({title : 'Two/One', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[two_one_first]<br /><br />[/two_one_first][two_one_second]<br /><br />[/two_one_second]');  
                        }});

                        m.add({title : 'One/Two', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[one_two_first]<br /><br />[/one_two_first][one_two_second]<br /><br />[/one_two_second]');  
                        }});

                        m.add({title : 'Three', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[three_first]<br /><br />[/three_first][three_second]<br /><br />[/three_second][three_third]<br /><br />[/three_third]');  
                        }});

                        m.add({title : 'Four', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[four_first]<br /><br />[/four_first][four_second]<br /><br />[/four_second][four_third]<br /><br />[/four_third][four_fourth]<br /><br />[/four_fourth]');  
                        }});

                        m.add({title : 'One/One/Two', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[one_one_two_first]<br /><br />[/one_one_two_first][one_one_two_second]<br /><br />[/one_one_two_second][one_one_two_third]<br /><br />[/one_one_two_third]');  
                        }});

                        m.add({title : 'Two/One/One', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[two_one_one_first]<br /><br />[/two_one_one_first][two_one_one_second]<br /><br />[/two_one_one_second][two_one_one_third]<br /><br />[/two_one_one_third]');  
                        }});

                        m.add({title : 'One/Two/One', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[one_two_one_first]<br /><br />[/one_two_one_first][one_two_one_second]<br /><br />[/one_two_one_second][one_two_one_third]<br /><br />[/one_two_one_third]');  
                        }});
                    });

                  // Return the new splitbutton instance
                  return c;
            }

            return null;
        }
    });
    tinymce.PluginManager.add('columns', tinymce.plugins.columns);

    tinymce.create('tinymce.plugins.extras', {  
        init : function(ed, url) {  
            ed.addButton('extras', {  
                title : 'Add a Divider',  
                image : url+'/extras.png'
            });  
        },  
        createControl: function(n, cm) {
            switch (n) {
                case 'extras':
                    var c = cm.createSplitButton('extrassplitbutton', {
                        title : 'Extras',
                        image : fullurl+'/extras.png',
                        onclick : function() {}
                    });

                    c.onRenderMenu.add(function(c, m) {
                        m.add({title : 'Extras', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                        m.add({title : 'Intro Text', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[intro-text size="25px"]' + tinyMCE.activeEditor.selection.getContent() + '[/intro-text]');  
                        }});

                        m.add({title : 'Get Posts', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[get-posts limit="5" category="uncategorized"]');  
                        }});

                        m.add({title : 'Bullet List', onclick : function() {
                            tinyMCE.activeEditor.selection.setContent('[bulletlist title="Title of bulletlist" align="left" background="on"]<br />[bulletlist_item]Item 01[/bulletlist_item]<br />[bulletlist_item]Item 02[/bulletlist_item]<br />[/bulletlist]');  
                        }});

                    });

                  // Return the new splitbutton instance
                  return c;
            }

            return null;
        }
    });  
    tinymce.PluginManager.add('extras', tinymce.plugins.extras); 
})();