document.getElementById("one").onchange = function () {
  document.getElementById("two").setAttribute("disabled", "disabled");
  if (this.value == "0" )
    document.getElementById("two").removeAttribute("disabled");
};


document.getElementById("A").onchange = function () {

  document.getElementById("B").setAttribute("disabled", "disabled");
   document.getElementById("C").setAttribute("disabled", "disabled");
    document.getElementById("D").setAttribute("disabled", "disabled");
     document.getElementById("E").setAttribute("disabled", "disabled");
     document.getElementById("F").setAttribute("disabled", "disabled");
   document.getElementById("G").setAttribute("disabled", "disabled");
    document.getElementById("H").setAttribute("disabled", "disabled");
     document.getElementById("I").setAttribute("disabled", "disabled");
     document.getElementById("J").setAttribute("disabled", "disabled");
  
  if (this.value == "Yes" )
 {   
 	document.getElementById("B").removeAttribute("disabled");
 	document.getElementById("C").removeAttribute("disabled");
 	document.getElementById("D").removeAttribute("disabled");
 	document.getElementById("E").removeAttribute("disabled");
 	document.getElementById("F").removeAttribute("disabled");
 	document.getElementById("G").removeAttribute("disabled");
 	document.getElementById("H").removeAttribute("disabled");
 	document.getElementById("I").removeAttribute("disabled");
 	document.getElementById("J").removeAttribute("disabled");
}

};

document.getElementById("1").onchange = function () {

  document.getElementById("2").setAttribute("disabled", "disabled");
   document.getElementById("3").setAttribute("disabled", "disabled");
    document.getElementById("4").setAttribute("disabled", "disabled");
     document.getElementById("5").setAttribute("disabled", "disabled");
     document.getElementById("6").setAttribute("disabled", "disabled");
   document.getElementById("7").setAttribute("disabled", "disabled");
    document.getElementById("8").setAttribute("disabled", "disabled");
     document.getElementById("9").setAttribute("disabled", "disabled");
  
  if (this.value == "Yes" )
 {   
  document.getElementById("2").removeAttribute("disabled");
  document.getElementById("3").removeAttribute("disabled");
  document.getElementById("4").removeAttribute("disabled");
  document.getElementById("5").removeAttribute("disabled");
  document.getElementById("6").removeAttribute("disabled");
  document.getElementById("7").removeAttribute("disabled");
  document.getElementById("8").removeAttribute("disabled");
  document.getElementById("9").removeAttribute("disabled");
}

};

/*var Select_List_Data = {
    
    'choices': { // name of associated select box
        
        // names match option values in controlling select box
        js: {
            text: ['Scrolling Divs', 'Tooltips', 'Rotate Images', 'Scrollers', 'Banner Rotator'],
            value: ['scroll', 'tooltips', 'rotate', 'scrollers', 'banner']
        },
        php: {
            text: ['Random Image', 'Form Class', 'Table Class', 'Order Form'],
            value: ['random', 'form', 'table', 'order']
        },
        tuts: {
            // example without values
            text: ['Iframes', 'PHP to JS', 'Object Literals', 'Initializing JS']
        }
    
    }    
};

/ removes all option elements in select box 
// removeGrp (optional) boolean to remove optgroups
function removeAllOptions(sel, removeGrp) {
    var len, groups, par;
    if (removeGrp) {
        groups = sel.getElementsByTagName('optgroup');
        len = groups.length;
        for (var i=len; i; i--) {
            sel.removeChild( groups[i-1] );
        }
    }
    
    len = sel.options.length;
    for (var i=len; i; i--) {
        par = sel.options[i-1].parentNode;
        par.removeChild( sel.options[i-1] );
    }
}

function appendDataToSelect(sel, obj) {
    var f = document.createDocumentFragment();
    var labels = [], group, opts;
    
    function addOptions(obj) {
        var f = document.createDocumentFragment();
        var o;
        
        for (var i=0, len=obj.text.length; i<len; i++) {
            o = document.createElement('option');
            o.appendChild( document.createTextNode( obj.text[i] ) );
            
            if ( obj.value ) {
                o.value = obj.value[i];
            }
            
            f.appendChild(o);
        }
        return f;
    }
    
    if ( obj.text ) {
        opts = addOptions(obj);
        f.appendChild(opts);
    } else {
        for ( var prop in obj ) {
            if ( obj.hasOwnProperty(prop) ) {
                labels.push(prop);
            }
        }
        
        for (var i=0, len=labels.length; i<len; i++) {
            group = document.createElement('optgroup');
            group.label = labels[i];
            f.appendChild(group);
            opts = addOptions(obj[ labels[i] ] );
            group.appendChild(opts);
        }
    }
    sel.appendChild(f);
};


/ anonymous function assigned to onchange event of controlling select box
document.forms['demoForm'].elements['category'].onchange = function(e) {
    // name of associated select box
    var relName = 'choices';
    
    // reference to associated select box 
    var relList = this.form.elements[ relName ];
    
    // get data from object literal based on selection in controlling select box (this.value)
    var obj = Select_List_Data[ relName ][ this.value ];
    
    // remove current option elements
    removeAllOptions(relList, true);
    
    // call function to add optgroup/option elements
    // pass reference to associated select box and data for new options
    appendDataToSelect(relList, obj);
};


// populate associated select box as page loads
(function() { // immediate function to avoid globals
    
    var form = document.forms['demoForm'];
    
    // reference to controlling select box
    var sel = form.elements['category'];
    sel.selectedIndex = 0;
    
    // name of associated select box
    var relName = 'choices';
    // reference to associated select box
    var rel = form.elements[ relName ];
    
    // get data for associated select box passing its name
    // and value of selected in controlling select box
    var data = Select_List_Data[ relName ][ sel.value ];
    
    // add options to associated select box
    appendDataToSelect(rel, data);
    
}());*/