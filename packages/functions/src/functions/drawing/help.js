module.exports = {
	en: 'Drawing',
	de: 'Zeichnen',
	functions: {
		ATTRIBUTES: {
			en: {
				argumentList: 'Visible,Container,Clip,Selectable',
				description: 'Create an attribute description to assign attributes to a graphical object.'
			},
			de: {
				argumentList: 'Sichtbar,Container,Clip,Auswählbar',
				description: 'Erzeugt eine Attributbeschreibung für ein graphisches Objekt.'
			}
		},
		AXIS: {
			en: {
				argumentList:
					'Min,Max,Step,TimeStep,ZoomMin,ZoomMax',
				description: 'Defines axis parameters'
			},
			de: {
				argumentList:
					'Minimum,Maximum,Schritt,Zeittyp,ZoomMinimum,ZoomMaximum',
				description: 'Definiert Achsenparameter'
			}
		},
		BAR: {
			en: {
				argumentList: 'Value,Direction,FillColor,LineColor',
				description: 'Draw a bar in the cell, where the function resides'
			},
			de: {
				argumentList: 'Zahl,Richtung,Füllfarbe,Linienfarbe',
				description: 'Zeichnet einen vertikalen oder horizonalen Balken in der Zelle, wo die Funktion ist'
			}
		},
		CLASSIFYPOINT: {
			en: { argumentList: 'X,Y,PolygonPointRange', description: 'Checks, if a point lies within a polygon' },
			de: { argumentList: 'X,Y,Punktebereich', description: 'Prüft, ob ein Punkt in einem Polygon liegt' }
		},
		'DRAW.BUTTON': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Label,LabelFont,Value',
				description: 'Creates a button control'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,Label,Labelschrift,Wert',
				description: 'Erzeugt ein Button Objekt'
			}
		},
		'DRAW.CHART': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,ChartType,DataRange,FormatRange',
				description: 'Creates a chart'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,Diagrammtyp,Datenbereich,Formatbereich',
				description: 'Erzeugt ein Diagramm'
			}
		},
		'DRAW.CHECKBOX': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Label,LabelFont,Value',
				description: 'Creates a checkbox control'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,Label,Labelschrift,Wert',
				description: 'Erzeugt ein Checkbox Objekt'
			}
		},
		'DRAW.ELLIPSE': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter',
				description: 'Creates an ellipse within the given drawing'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt',
				description: 'Erzeugt eine Ellipse in der angegebenen Zeichnung'
			}
		},
		'DRAW.LABEL': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Text,Font',
				description: 'Creates a text element'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,LinienFormat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,Text,Font',
				description: 'Erzeugt ein Textelement'
			}
		},
		'DRAW.LINE': {
			en: { argumentList: 'UniqueID,Container,Name,X1,Y1,X2,Y2,LineFormat', description: 'Creates a line' },
			de: { argumentList: 'UniqueID,Container,Name,X1,Y1,X2,Y2,Linienformat', description: 'Erzeugt eine Linie' }
		},
		'DRAW.KNOB': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Label,LabelFont,Value,Min,Max,Step,ScaleFont,Marker,FormatRange,StartAngle,EndAngle',
				description: 'Creates a knob control'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,Label,Labelschrift,Wert,Minimum,Maximum,Schritt,Skalenschrift,Marker,Skalenformat,StartWinkel,EndWinkel',
				description: 'Erzeugt ein Drehregler Objekt'
			}
		},
		'DRAW.STREAMCHART': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter',
				description: 'Creates a chart'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt',
				description: 'Erzeugt ein Diagramm'
			}
		},
		'DRAW.POLYGON': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,PointRange,Close',
				description: 'Creates a polygon within the given drawing using proportional coordinates'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,PunkteBereich,Schließen',
				description: 'Erzeugt ein Polygon mit den angegebenen Koordinaten'
			}
		},
		'DRAW.RECTANGLE': {
			en: {
				argumentList:
					'UniqueID,Parent,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter',
				description: 'Creates a rectangle within the given drawing'
			},
			de: {
				argumentList:
					'UniqueID,Zeichnung,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt',
				description: 'Erzeugt ein Rechteck in der angegebenen Zeichnung'
			}
		},
		'DRAW.SLIDER': {
			en: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Width,Height,LineFormat,FillFormat,Attributes,Events,Angle,RotCenter,Label,LabelFont,Value,Min,Max,Step,ScaleFont,Marker,FormatRange',
				description: 'Creates a slider control'
			},
			de: {
				argumentList:
					'UniqueID,Container,Name,X,Y,Breite,Höhe,Linienformat,Füllformat,Attribute,Events,Winkel,Ankerpunkt,Label,Labelschrift,Wert,Minimum,Maximum,Schritt,Skalenschrift,Marker,Skalenformat',
				description: 'Erzeugt ein Schieberegler Objekt'
			}
		},
		EVENTS: {
			en: {
				argumentList: 'EventHandler1, EventHandler2...',
				description: 'Define an eventhandler for a graphical object'
			},
			de: {
				argumentList: 'EventHandler1, EventHandler2...',
				description: 'Definiert einen Eventhandler für ein graphisches Objekt'
			}
		},
		FILLLINEARGRADIENT: {
			en: { argumentList: 'StartColor,EndColor,Angle', description: 'Creates a linear gradient fill definition' },
			de: {
				argumentList: 'Anfangsfarbe,Endfarbe,Winkel',
				description: 'Erzeugt eine Fülldefinition für lineare Verläufe'
			}
		},
		FILLPATTERN: {
			en: { argumentList: 'DataURI', description: 'Creates a pattern fill definition' },
			de: { argumentList: 'DataURI,Stil', description: 'Erzeugt eine Musterfülldefinition' }
		},
		FILLRADIALGRADIENT: {
			en: {
				argumentList: 'StartColor,EndColor,XOffset,YOffset',
				description: 'Creates a radial gradient fill definition'
			},
			de: {
				argumentList: 'Anfangsfarbe,Endfarbe,XVersatz,YVersatz',
				description: 'Erzeugt eine Fülldefinition für radiale Verläufe'
			}
		},
		FONTFORMAT: {
			en: {
				argumentList: 'Name,Size,Style,Color,HorizontalAlignment',
				description: 'Creates a font format to be used for drawing elements'
			},
			de: {
				argumentList: 'Name,Größe,Stil,Farbe,HorizontaleAusrichtung',
				description: 'Erzeugt ein Schriftformat für Zeichenobjekte.'
			}
		},
		LINEFORMAT: {
			en: {
				argumentList: 'Color,Style,Width,ArrowStart,ArrowEnd',
				description: 'Creates a line style to be used for drawing elements'
			},
			de: { argumentList: 'Farbe,Stil,Breite,PfeilAnfang,PfeilEnde', description: 'Erzeugt einen Linienstil.' }
		},
		ONCLICK: {
			en: {
				argumentList: 'Function',
				description: 'Executes given function on a mouse click on top of a drawing or drawing item'
			},
			de: {
				argumentList: 'Funktion',
				description:
					'Führt die angegebene Funktion auf dem Server aus, wenn eine Zeichnung oder ein Objekt angeklickt wurde'
			}
		},
		ONDOUBLECLICK: {
			en: {
				argumentList: 'Function',
				description: 'Executes given function on a mouse double click on top of a drawing or drawing item'
			},
			de: {
				argumentList: 'Funktion',
				description:
					'Führt die angegebene Funktion auf dem Server aus, wenn eine Zeichnung oder ein Objekt doppelt angeklickt wurde'
			}
		},
		ONMOUSEDOWN: {
			en: {
				argumentList: 'Function',
				description: 'Executes given function on a mouse button down event on top of a drawing or drawing item'
			},
			de: {
				argumentList: 'Funktion',
				description:
					'Führt die angegebene Funktion auf dem Server aus, wenn auf einer Zeichnung oder einem Objekt der Mausschalter gedrückt wurde'
			}
		},
		ONMOUSEUP: {
			en: {
				argumentList: 'Function',
				description: 'Executes given function on a mouse button up event on top of a drawing or drawing item'
			},
			de: {
				argumentList: 'Funktion',
				description:
					'Führt die angegebene Funktion auf dem Server aus, wenn auf einer Zeichnung oder einem Objekt der Mausschalter losgelassen wurde'
			}
		},
		ONVALUECHANGE: {
			en: {
				argumentList: 'Function',
				description: 'Executes given function, if a graphical item changes a status value'
			},
			de: {
				argumentList: 'Funktion',
				description:
					'Führt die angegebene Funktion auf dem Server aus, wenn bei einem Graphikobjekt ein Statuswert geändert wird.'
			}
		},
		QRCODE: {
			en: { argumentList: 'Text', description: 'Create a QRCode key' },
			de: {
				argumentList: 'Text',
				description: 'Erzeugt einen QRCode Schlüssel, der für Füllmuster benutzt werden kann'
			}
		},
		SERIES: {
			en: {
				argumentList:
					'SeriesTitle,CategoriesOrDataSource,ValuesOrXValues,Values',
				description: 'Defines series parameters'
			},
			de: {
				argumentList:
					'Reihentitel,KategorienOderDatenquelle,WerteOderXWerte,Werte',
				description: 'Definiert Datenreihen Parameter'
			}
		},
	}
};
