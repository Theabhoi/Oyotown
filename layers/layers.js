ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32631").setExtent([564154.954708, 845230.136720, 646426.336840, 887840.407565]);
var wms_layers = [];

var format_School_0 = new ol.format.GeoJSON();
var features_School_0 = format_School_0.readFeatures(json_School_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_School_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_School_0.addFeatures(features_School_0);
var lyr_School_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_School_0, 
                style: style_School_0,
                popuplayertitle: 'School',
                interactive: true,
                title: '<img src="styles/legend/School_0.png" /> School'
            });
var format_River_1 = new ol.format.GeoJSON();
var features_River_1 = format_River_1.readFeatures(json_River_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_River_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_1.addFeatures(features_River_1);
var lyr_River_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_River_1, 
                style: style_River_1,
                popuplayertitle: 'River',
                interactive: true,
                title: '<img src="styles/legend/River_1.png" /> River'
            });
var format_Oyo_Boundary_2 = new ol.format.GeoJSON();
var features_Oyo_Boundary_2 = format_Oyo_Boundary_2.readFeatures(json_Oyo_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Oyo_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Oyo_Boundary_2.addFeatures(features_Oyo_Boundary_2);
var lyr_Oyo_Boundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Oyo_Boundary_2, 
                style: style_Oyo_Boundary_2,
                popuplayertitle: 'Oyo_Boundary',
                interactive: true,
                title: '<img src="styles/legend/Oyo_Boundary_2.png" /> Oyo_Boundary'
            });
var format_Mosque_3 = new ol.format.GeoJSON();
var features_Mosque_3 = format_Mosque_3.readFeatures(json_Mosque_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Mosque_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_3.addFeatures(features_Mosque_3);
var lyr_Mosque_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_3, 
                style: style_Mosque_3,
                popuplayertitle: 'Mosque',
                interactive: true,
                title: '<img src="styles/legend/Mosque_3.png" /> Mosque'
            });
var format_Minor_Road_4 = new ol.format.GeoJSON();
var features_Minor_Road_4 = format_Minor_Road_4.readFeatures(json_Minor_Road_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Minor_Road_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Minor_Road_4.addFeatures(features_Minor_Road_4);
var lyr_Minor_Road_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Minor_Road_4, 
                style: style_Minor_Road_4,
                popuplayertitle: 'Minor_Road',
                interactive: true,
                title: '<img src="styles/legend/Minor_Road_4.png" /> Minor_Road'
            });
var format_Major_Road_5 = new ol.format.GeoJSON();
var features_Major_Road_5 = format_Major_Road_5.readFeatures(json_Major_Road_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Major_Road_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_Road_5.addFeatures(features_Major_Road_5);
var lyr_Major_Road_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Major_Road_5, 
                style: style_Major_Road_5,
                popuplayertitle: 'Major_Road',
                interactive: true,
                title: '<img src="styles/legend/Major_Road_5.png" /> Major_Road'
            });
var format_Hotel_6 = new ol.format.GeoJSON();
var features_Hotel_6 = format_Hotel_6.readFeatures(json_Hotel_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Hotel_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_6.addFeatures(features_Hotel_6);
var lyr_Hotel_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_6, 
                style: style_Hotel_6,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_6.png" /> Hotel'
            });
var format_Hospital_7 = new ol.format.GeoJSON();
var features_Hospital_7 = format_Hospital_7.readFeatures(json_Hospital_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Hospital_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_7.addFeatures(features_Hospital_7);
var lyr_Hospital_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_7, 
                style: style_Hospital_7,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_7.png" /> Hospital'
            });
var format_Church_8 = new ol.format.GeoJSON();
var features_Church_8 = format_Church_8.readFeatures(json_Church_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Church_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Church_8.addFeatures(features_Church_8);
var lyr_Church_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Church_8, 
                style: style_Church_8,
                popuplayertitle: 'Church',
                interactive: true,
                title: '<img src="styles/legend/Church_8.png" /> Church'
            });

lyr_School_0.setVisible(true);lyr_River_1.setVisible(true);lyr_Oyo_Boundary_2.setVisible(true);lyr_Mosque_3.setVisible(true);lyr_Minor_Road_4.setVisible(true);lyr_Major_Road_5.setVisible(true);lyr_Hotel_6.setVisible(true);lyr_Hospital_7.setVisible(true);lyr_Church_8.setVisible(true);
var layersList = [lyr_School_0,lyr_River_1,lyr_Oyo_Boundary_2,lyr_Mosque_3,lyr_Minor_Road_4,lyr_Major_Road_5,lyr_Hotel_6,lyr_Hospital_7,lyr_Church_8];
lyr_School_0.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_River_1.set('fieldAliases', {'Id': 'Id', });
lyr_Oyo_Boundary_2.set('fieldAliases', {'Id': 'Id', });
lyr_Mosque_3.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Minor_Road_4.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Major_Road_5.set('fieldAliases', {'Id': 'Id', 'Name1': 'Name1', });
lyr_Hotel_6.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Hospital_7.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_Church_8.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', });
lyr_School_0.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_River_1.set('fieldImages', {'Id': 'TextEdit', });
lyr_Oyo_Boundary_2.set('fieldImages', {'Id': 'TextEdit', });
lyr_Mosque_3.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Minor_Road_4.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Major_Road_5.set('fieldImages', {'Id': 'TextEdit', 'Name1': 'TextEdit', });
lyr_Hotel_6.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Hospital_7.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Church_8.set('fieldImages', {'Id': 'TextEdit', 'Name': 'TextEdit', });
lyr_School_0.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_River_1.set('fieldLabels', {'Id': 'no label', });
lyr_Oyo_Boundary_2.set('fieldLabels', {'Id': 'inline label - visible with data', });
lyr_Mosque_3.set('fieldLabels', {'Id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Minor_Road_4.set('fieldLabels', {'Id': 'inline label - always visible', 'Name': 'inline label - visible with data', });
lyr_Major_Road_5.set('fieldLabels', {'Id': 'no label', 'Name1': 'inline label - always visible', });
lyr_Hotel_6.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Hospital_7.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Church_8.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', });
lyr_Church_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});