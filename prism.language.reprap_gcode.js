Prism.languages.reprap_gcode = {
	comment: /;.*/,
	keyword: /\b(G[\d]+|M[\d]+)\b/g,
	property: /\b(X|Y|Z|E|F|S|P|T|I|J|D|H|R|Q|N|\*)/g
};
