function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.7362167, lng: -73.9595342 },
    zoom: 13,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeControl: false,
    styles: styles,
  });
  createMapMarkers(map);
}

function createMapMarkers(mapName) {
  for (let i = 0; i < locations.length; i++) {
    let myLatLng = { lat: locations[i].lat, lng: locations[i].lng }
    new google.maps.Marker({
      position: myLatLng,
      map: mapName,
      title: `${locations[i].stationCode}`,
    });      
  }
}

const locations = [
  { stationCode: "R001", stationName: "SOUTH FERRY", lat: 40.703082, lng: -74.012983 },
  { stationCode: "R002", stationName: "FULTON ST", lat: 40.709938, lng: -74.007983 },
  { stationCode: "R003", stationName: "CYPRESS HILLS", lat: 40.689945, lng: -73.872564 },
  { stationCode: "R004", stationName: "ELDERTS LANE", lat: 40.69132, lng: -73.867135 },
  { stationCode: "R005", stationName: "FOREST PARKWAY", lat: 40.692304, lng: -73.860151 },
  { stationCode: "R006", stationName: "WOODHAVEN BLVD", lat: 40.693866, lng: -73.851568 },
  { stationCode: "R007", stationName: "104 ST", lat: 40.695184, lng: -73.844326 },
  { stationCode: "R008", stationName: "111 ST", lat: 40.697405, lng: -73.836354 },
  { stationCode: "R009", stationName: "121 ST", lat: 40.700536, lng: -73.828382 },
  { stationCode: "R010", stationName: "42 ST-PA BUS TE", lat: 40.757303, lng: -73.989787 },
  { stationCode: "R011", stationName: "42 ST-PA BUS TE", lat: 40.757303, lng: -73.989787 },
  { stationCode: "R012", stationName: "34 ST-PENN STA", lat: 40.752247, lng: -73.993456 },
  { stationCode: "R013", stationName: "34 ST-PENN STA", lat: 40.752247, lng: -73.993456 },
  { stationCode: "R014", stationName: "FULTON ST", lat: 40.709938, lng: -74.007983 },
  { stationCode: "R015", stationName: "5 AVE-53 ST", lat: 40.760179, lng: -73.975196 },
  { stationCode: "R016", stationName: "LEXINGTON-53 ST", lat: 40.75753, lng: -73.969102 },
  { stationCode: "R017", stationName: "LEXINGTON-53 ST", lat: 40.75753, lng: -73.969102 },
  { stationCode: "R018", stationName: "74 ST-BROADWAY", lat: 40.746655, lng: -73.891361 },
  { stationCode: "R019", stationName: "JAMAICA-179 ST", lat: 40.712622, lng: -73.783815 },
  { stationCode: "R020", stationName: "47-50 ST-ROCK", lat: 40.758652, lng: -73.981311 },
  { stationCode: "R021", stationName: "42 ST-BRYANT PK", lat: 40.754198, lng: -73.984573 },
  { stationCode: "R022", stationName: "34 ST-HERALD SQ", lat: 40.749533, lng: -73.987899 },
  { stationCode: "R023", stationName: "34 ST-HERALD SQ", lat: 40.749533, lng: -73.987899 },
  { stationCode: "R024", stationName: "SUTPHIN BLVD", lat: 40.700488, lng: -73.807933 },
  { stationCode: "R025", stationName: "JAMAICA CENTER", lat: 40.702131, lng: -73.80111 },
  { stationCode: "R027", stationName: "WALL ST", lat: 40.706864, lng: -74.009056 },
  { stationCode: "R028", stationName: "FULTON ST", lat: 40.709938, lng: -74.007983 },
  { stationCode: "R029", stationName: "CHAMBERS ST", lat: 40.71433, lng: -74.008563 },
  { stationCode: "R030", stationName: "CHAMBERS ST", lat: 40.715436, lng: -74.009335 },
  { stationCode: "R031", stationName: "34 ST-PENN STA", lat: 40.750329, lng: -73.991096 },
  { stationCode: "R032", stationName: "42 ST-TIMES SQ", lat: 40.755905, lng: -73.986504 },
  { stationCode: "R033", stationName: "42 ST-TIMES SQ", lat: 40.755905, lng: -73.986504 },
  { stationCode: "R034", stationName: "125 ST", lat: 40.815596, lng: -73.958395 },
  { stationCode: "R035", stationName: "168 ST-BROADWAY", lat: 40.840778, lng: -73.940091 },
  { stationCode: "R036", stationName: "DYCKMAN ST", lat: 40.860523, lng: -73.925575 },
  { stationCode: "R037", stationName: "207 ST", lat: 40.864653, lng: -73.918719 },
  { stationCode: "R038", stationName: "215 ST", lat: 40.869359, lng: -73.915329 },
  { stationCode: "R039", stationName: "MARBLE HILL-225", lat: 40.874551, lng: -73.909879 },
  { stationCode: "R040", stationName: "231 ST", lat: 40.878867, lng: -73.904858 },
  { stationCode: "R041", stationName: "BOWLING GREEN", lat: 40.704782, lng: -74.014099 },
  { stationCode: "R042", stationName: "BOWLING GREEN", lat: 40.704782, lng: -74.014099 },
  { stationCode: "R043", stationName: "WALL ST", lat: 40.707466, lng: -74.011867 },
  { stationCode: "R044", stationName: "BROOKLYN BRIDGE", lat: 40.713159, lng: -74.003917 },
  { stationCode: "R045", stationName: "42 ST-GRD CNTRL", lat: 40.751849, lng: -73.976945 },
  { stationCode: "R046", stationName: "42 ST-GRD CNTRL", lat: 40.751849, lng: -73.976945 },
  { stationCode: "R047", stationName: "42 ST-GRD CNTRL", lat: 40.751849, lng: -73.976945 },
  { stationCode: "R048", stationName: "42 ST-GRD CNTRL", lat: 40.751849, lng: -73.976945 },
  { stationCode: "R049", stationName: "51 ST", lat: 40.757108, lng: -73.97187 },
  { stationCode: "R050", stationName: "59 ST", lat: 40.762796, lng: -73.967686 },
  { stationCode: "R051", stationName: "59 ST", lat: 40.762796, lng: -73.967686 },
  { stationCode: "R052", stationName: "WOODLAWN ROAD", lat: 40.885973, lng: -73.878851 },
  { stationCode: "R053", stationName: "149 ST-3 AVE", lat: 40.816132, lng: -73.917754 },
  { stationCode: "R054", stationName: "5 AVE-BRYANT PK", lat: 40.753824, lng: -73.981966 },
  { stationCode: "R055", stationName: "MAIN ST", lat: 40.759578, lng: -73.830056 },
  { stationCode: "R056", stationName: "NEVINS ST", lat: 40.688269, lng: -73.980453 },
  { stationCode: "R057", stationName: "ATLANTIC AVE", lat: 40.684063, lng: -73.977417 },
  { stationCode: "R058", stationName: "BERGEN ST", lat: 40.680801, lng: -73.975132 },
  { stationCode: "R059", stationName: "GRAND ARMY PLAZ", lat: 40.675219, lng: -73.971012 },
  { stationCode: "R060", stationName: "EASTERN PKWY", lat: 40.672013, lng: -73.96436 },
  { stationCode: "R061", stationName: "NOSTRAND AVE", lat: 40.669735, lng: -73.950455 },
  { stationCode: "R062", stationName: "CROWN HTS-UTICA", lat: 40.669279, lng: -73.932967 },
  { stationCode: "R063", stationName: "SUTTER AVE", lat: 40.664591, lng: -73.922668 },
  { stationCode: "R064", stationName: "SARATOGA AVE", lat: 40.661466, lng: -73.916316 },
  { stationCode: "R065", stationName: "ROCKAWAY AVE", lat: 40.662541, lng: -73.908763 },
  { stationCode: "R066", stationName: "JUNIUS ST", lat: 40.663419, lng: -73.902454 },
  { stationCode: "R067", stationName: "PENNSYLVANIA AV", lat: 40.664884, lng: -73.894258 },
  { stationCode: "R068", stationName: "VAN SICLEN AVE", lat: 40.665405, lng: -73.889451 },
  { stationCode: "R069", stationName: "NEW LOTS AVE", lat: 40.666252, lng: -73.884087 },
  { stationCode: "R070", stationName: "ST. GEORGE", lat: 40.643738, lng: -74.073622 },
  { stationCode: "R076", stationName: "2 BDWY CUST SRV", lat: 40.704591, lng: -74.013273 },
  { stationCode: "R079", stationName: "5 AVE-59 ST", lat: 40.764909, lng: -73.973372 },
  { stationCode: "R080", stationName: "57 ST-7 AVE", lat: 40.764755, lng: -73.980646 },
  { stationCode: "R081", stationName: "49 ST-7 AVE", lat: 40.760139, lng: -73.984112 },
  { stationCode: "R082", stationName: "28 ST-BROADWAY", lat: 40.745574, lng: -73.988682 },
  { stationCode: "R083", stationName: "23 ST-5 AVE", lat: 40.741006, lng: -73.989315 },
  { stationCode: "R084", stationName: "59 ST-COLUMBUS", lat: 40.76811, lng: -73.981891 },
  { stationCode: "R085", stationName: "8 ST-B'WAY NYU", lat: 40.730348, lng: -73.992705 },
  { stationCode: "R086", stationName: "PRINCE ST-B'WAY", lat: 40.724332, lng: -73.997684 },
  { stationCode: "R087", stationName: "MURRAY ST-B'WAY", lat: 40.713086, lng: -74.007232 },
  { stationCode: "R088", stationName: "CORTLANDT ST", lat: 40.710662, lng: -74.011052 },
  { stationCode: "R089", stationName: "JAY ST-METROTEC", lat: 40.692182, lng: -73.985935 },
  { stationCode: "R090", stationName: "BEEBE-39 AVE", lat: 40.753076, lng: -73.93271 },
  { stationCode: "R091", stationName: "WASHINGTON-36 A", lat: 40.756977, lng: -73.929373 },
  { stationCode: "R092", stationName: "BROADWAY-31 ST", lat: 40.761959, lng: -73.925382 },
  { stationCode: "R093", stationName: "GRAND-30 AVE", lat: 40.766843, lng: -73.921423 },
  { stationCode: "R094", stationName: "HOYT ST-ASTORIA", lat: 40.770426, lng: -73.917614 },
  { stationCode: "R095", stationName: "DITMARS BL-31 S", lat: 40.774984, lng: -73.912067 },
  { stationCode: "R096", stationName: "82 ST-JACKSON H", lat: 40.747647, lng: -73.883786 },
  { stationCode: "R097", stationName: "JUNCTION BLVD", lat: 40.749143, lng: -73.869452 },
  { stationCode: "R098", stationName: "CHURCH AVE", lat: 40.650494, lng: -73.962836 },
  { stationCode: "R098", stationName: "CHURCH AVE", lat: 40.650494, lng: -73.962836 },
  { stationCode: "R099", stationName: "DEKALB AVE", lat: 40.690612, lng: -73.981848 },
  { stationCode: "R100", stationName: "METROPOLITAN AV", lat: 40.711353, lng: -73.88958 },
  { stationCode: "R101", stationName: "145 ST", lat: 40.824787, lng: -73.944232 },
  { stationCode: "R102", stationName: "125 ST", lat: 40.811056, lng: -73.952386 },
  { stationCode: "R103", stationName: "BROADWAY-ENY", lat: 40.678848, lng: -73.904139 },
  { stationCode: "R104", stationName: "167 ST", lat: 40.833773, lng: -73.91843 },
  { stationCode: "R105", stationName: "14 ST", lat: 40.738007, lng: -73.998381 },
  { stationCode: "R106", stationName: "CASTLE HILL AVE", lat: 40.834255, lng: -73.851222 },
  { stationCode: "R107", stationName: "WESTCHESTER SQ", lat: 40.839892, lng: -73.842952 },
  { stationCode: "R108", stationName: "BOROUGH HALL/CT", lat: 40.692404, lng: -73.990151 },
  { stationCode: "R109", stationName: "CHURCH AVE", lat: 40.650843, lng: -73.949575 },
  { stationCode: "R110", stationName: "FLATBUSH AVE", lat: 40.632836, lng: -73.947642 },
  { stationCode: "R111", stationName: "23 ST", lat: 40.745924, lng: -73.998005 },
  { stationCode: "R112", stationName: "FORDHAM ROAD", lat: 40.862803, lng: -73.901034 },
  { stationCode: "R113", stationName: "7 AVE-53 ST", lat: 40.762877, lng: -73.98159 },
  { stationCode: "R114", stationName: "PARSONS BLVD", lat: 40.707564, lng: -73.803326 },
  { stationCode: "R115", stationName: "169 ST", lat: 40.710459, lng: -73.7936 },
  { stationCode: "R116", stationName: "50 ST", lat: 40.761675, lng: -73.983908 },
  { stationCode: "R117", stationName: "242 ST", lat: 40.889185, lng: -73.898549 },
  { stationCode: "R118", stationName: "CANAL ST", lat: 40.718233, lng: -74.000323 },
  { stationCode: "R119", stationName: "FORDHAM ROAD", lat: 40.862941, lng: -73.901199 },
  { stationCode: "R120", stationName: "MORRISON AVE", lat: 40.829495, lng: -73.874559 },
  { stationCode: "R121", stationName: "QUEENSBORO PLZ", lat: 40.750508, lng: -73.940177 },
  { stationCode: "R122", stationName: "90 ST-ELMHURST", lat: 40.748541, lng: -73.876791 },
  { stationCode: "R123", stationName: "FRANKLIN AVE", lat: 40.670711, lng: -73.958051 },
  { stationCode: "R124", stationName: "KINGSTON AVE", lat: 40.669409, lng: -73.942173 },
  { stationCode: "R125", stationName: "BROAD ST", lat: 40.706539, lng: -74.011052 },
  { stationCode: "R126", stationName: "175 ST", lat: 40.847369, lng: -73.939683 },
  { stationCode: "R127", stationName: "JAY ST-METROTEC", lat: 40.692338, lng: -73.987342 },
  { stationCode: "R128", stationName: "SUTPHIN BLVD", lat: 40.705416, lng: -73.810562 },
  { stationCode: "R129", stationName: "BERGEN ST", lat: 40.686154, lng: -73.990881 },
  { stationCode: "R130", stationName: "KINGS HIGHWAY", lat: 40.603234, lng: -73.972342 },
  { stationCode: "R131", stationName: "23 ST", lat: 40.740088, lng: -73.986429 },
  { stationCode: "R132", stationName: "125 ST", lat: 40.804406, lng: -73.937452 },
  { stationCode: "R133", stationName: "MOSHOLU PARKWAY", lat: 40.87963, lng: -73.884666 },
  { stationCode: "R134", stationName: "HUNTERS PT AVE", lat: 40.74238, lng: -73.948889 },
  { stationCode: "R135", stationName: "NEWKIRK AVE", lat: 40.639961, lng: -73.948352 },
  { stationCode: "R136", stationName: "SHEEPSHEAD BAY", lat: 40.58681, lng: -73.954167 },
  { stationCode: "R137", stationName: "MYRTLE AVE", lat: 40.699707, lng: -73.91181 },
  { stationCode: "R138", stationName: "W 4 ST-WASH SQ", lat: 40.732251, lng: -74.000559 },
  { stationCode: "R139", stationName: "CANAL ST", lat: 40.720852, lng: -74.005237 },
  { stationCode: "R140", stationName: "QUEENS PLAZA", lat: 40.748948, lng: -73.937194 },
  { stationCode: "R141", stationName: "FOREST HILLS-71", lat: 40.721681, lng: -73.84439 },
  { stationCode: "R142", stationName: "DELANCEY ST", lat: 40.71838, lng: -73.987813 },
  { stationCode: "R143", stationName: "28 ST", lat: 40.743095, lng: -73.984251 },
  { stationCode: "R144", stationName: "96 ST", lat: 40.785822, lng: -73.95097 },
  { stationCode: "R145", stationName: "WAKEFIELD-241", lat: 40.903085, lng: -73.850591 },
  { stationCode: "R146", stationName: "HUNTS POINT AVE", lat: 40.820889, lng: -73.890567 },
  { stationCode: "R147", stationName: "61 ST/WOODSIDE", lat: 40.745623, lng: -73.902969 },
  { stationCode: "R148", stationName: "PARKSIDE AVE", lat: 40.655053, lng: -73.961227 },
  { stationCode: "R149", stationName: "NEWKIRK AVE", lat: 40.635059, lng: -73.962793 },
  { stationCode: "R150", stationName: "AVE U", lat: 40.599307, lng: -73.955916 },
  { stationCode: "R151", stationName: "STILLWELL AVE", lat: 40.577423, lng: -73.981225 },
  { stationCode: "R152", stationName: "ROCKAWAY PKY", lat: 40.64666, lng: -73.901832 },
  { stationCode: "R153", stationName: "UTICA AVE", lat: 40.679279, lng: -73.930585 },
  { stationCode: "R154", stationName: "TREMONT AVE", lat: 40.850307, lng: -73.905244 },
  { stationCode: "R155", stationName: "KINGSBRIDGE RD", lat: 40.866974, lng: -73.893485 },
  { stationCode: "R156", stationName: "BEDFORD PARK BL", lat: 40.873026, lng: -73.886919 },
  { stationCode: "R157", stationName: "NORWOOD-205 ST", lat: 40.874827, lng: -73.878872 },
  { stationCode: "R158", stationName: "UNION TPK-KEW G", lat: 40.714444, lng: -73.830979 },
  { stationCode: "R159", stationName: "116 ST-COLUMBIA", lat: 40.80819, lng: -73.964124 },
  { stationCode: "R160", stationName: "ASTOR PLACE", lat: 40.730056, lng: -73.991042 },
  { stationCode: "R161", stationName: "KINGSBRIDGE RD", lat: 40.867899, lng: -73.897326 },
  { stationCode: "R162", stationName: "ELDER AVE", lat: 40.828894, lng: -73.879559 },
  { stationCode: "R163", stationName: "14 ST-6 AVE", lat: 40.737348, lng: -73.9969 },
  { stationCode: "R164", stationName: "66 ST-LINCOLN", lat: 40.773424, lng: -73.982234 },
  { stationCode: "R165", stationName: "TOMPKINSVILLE", lat: 40.636948, lng: -74.074824 },
  { stationCode: "R166", stationName: "79 ST", lat: 40.783872, lng: -73.979938 },
  { stationCode: "R167", stationName: "86 ST", lat: 40.788844, lng: -73.97599 },
  { stationCode: "R168", stationName: "96 ST", lat: 40.79388, lng: -73.972363 },
  { stationCode: "R169", stationName: "137 ST-CITY COL", lat: 40.821994, lng: -73.953674 },
  { stationCode: "R170", stationName: "14 ST-UNION SQ", lat: 40.734836, lng: -73.990688 },
  { stationCode: "R171", stationName: "7 AVE", lat: 40.677172, lng: -73.972514 },
  { stationCode: "R172", stationName: "BRIGHTON BEACH", lat: 40.577961, lng: -73.961806 },
  { stationCode: "R173", stationName: "INWOOD-207 ST", lat: 40.868045, lng: -73.919921 },
  { stationCode: "R174", stationName: "181 ST", lat: 40.851686, lng: -73.937967 },
  { stationCode: "R175", stationName: "14 ST", lat: 40.740388, lng: -74.002104 },
  { stationCode: "R176", stationName: "33 ST", lat: 40.746119, lng: -73.981826 },
  { stationCode: "R177", stationName: "68ST-HUNTER COL", lat: 40.768143, lng: -73.964016 },
  { stationCode: "R178", stationName: "77 ST", lat: 40.773636, lng: -73.959875 },
  { stationCode: "R179", stationName: "86 ST", lat: 40.779485, lng: -73.955541 },
  { stationCode: "R180", stationName: "103 ST", lat: 40.790582, lng: -73.947473 },
  { stationCode: "R181", stationName: "110 ST", lat: 40.795066, lng: -73.944297 },
  { stationCode: "R182", stationName: "116 ST", lat: 40.798574, lng: -73.941593 },
  { stationCode: "R183", stationName: "BEDFORD PARK BL", lat: 40.873399, lng: -73.890084 },
  { stationCode: "R184", stationName: "CORTELYOU ROAD", lat: 40.640905, lng: -73.963866 },
  { stationCode: "R185", stationName: "DYCKMAN-200 ST", lat: 40.865286, lng: -73.92698 },
  { stationCode: "R186", stationName: "86 ST", lat: 40.785822, lng: -73.968952 },
  { stationCode: "R187", stationName: "81 ST-MUSEUM", lat: 40.781435, lng: -73.972149 },
  { stationCode: "R188", stationName: "50 ST", lat: 40.762439, lng: -73.985989 },
  { stationCode: "R189", stationName: "CHRISTOPHER ST", lat: 40.733405, lng: -74.002898 },
  { stationCode: "R190", stationName: "23 ST", lat: 40.744071, lng: -73.995624 },
  { stationCode: "R191", stationName: "103 ST", lat: 40.799354, lng: -73.968329 },
  { stationCode: "R192", stationName: "110 ST-CATHEDRL", lat: 40.804032, lng: -73.966742 },
  { stationCode: "R193", stationName: "157 ST", lat: 40.833879, lng: -73.944726 },
  { stationCode: "R194", stationName: "BLEECKER ST", lat: 40.725665, lng: -73.995645 },
  { stationCode: "R195", stationName: "161 ST-YANKEE", lat: 40.827888, lng: -73.925736 },
  { stationCode: "R196", stationName: "PROSPECT PARK", lat: 40.661596, lng: -73.962193 },
  { stationCode: "R197", stationName: "36 ST", lat: 40.65515, lng: -74.003477 },
  { stationCode: "R198", stationName: "NOSTRAND AVE", lat: 40.68041, lng: -73.950326 },
  { stationCode: "R199", stationName: "KINGSTON-THROOP", lat: 40.679921, lng: -73.940858 },
  { stationCode: "R200", stationName: "EUCLID AVE", lat: 40.675382, lng: -73.87207 },
  { stationCode: "R201", stationName: "WOODHAVEN BLVD", lat: 40.73308, lng: -73.869259 },
  { stationCode: "R202", stationName: "63 DR-REGO PARK", lat: 40.729869, lng: -73.86161 },
  { stationCode: "R203", stationName: "23 ST-6 AVE", lat: 40.742868, lng: -73.99277 },
  { stationCode: "R204", stationName: "CHURCH AVE", lat: 40.644039, lng: -73.979541 },
  { stationCode: "R205", stationName: "149 ST-GR CONC", lat: 40.818429, lng: -73.926927 },
  { stationCode: "R206", stationName: "125 ST", lat: 40.808076, lng: -73.945906 },
  { stationCode: "R207", stationName: "135 ST", lat: 40.814459, lng: -73.940992 },
  { stationCode: "R208", stationName: "103 ST-CORONA", lat: 40.749858, lng: -73.862672 },
  { stationCode: "R209", stationName: "STERLING ST", lat: 40.662752, lng: -73.950605 },
  { stationCode: "R210", stationName: "BEVERLY ROAD", lat: 40.645089, lng: -73.948975 },
  { stationCode: "R211", stationName: "KINGS HIGHWAY", lat: 40.608691, lng: -73.957772 },
  { stationCode: "R212", stationName: "59 ST", lat: 40.641426, lng: -74.017972 },
  { stationCode: "R213", stationName: "BAY RIDGE AVE", lat: 40.634945, lng: -74.023411 },
  { stationCode: "R214", stationName: "77 ST", lat: 40.629702, lng: -74.025514 },
  { stationCode: "R215", stationName: "86 ST", lat: 40.622715, lng: -74.028368 },
  { stationCode: "R216", stationName: "BAY RIDGE-95 ST", lat: 40.616624, lng: -74.030964 },
  { stationCode: "R217", stationName: "HOYT/SCHERMER", lat: 40.688465, lng: -73.985474 },
  { stationCode: "R218", stationName: "ELMHURST AVE", lat: 40.742445, lng: -73.882005 },
  { stationCode: "R219", stationName: "67 AVE", lat: 40.726462, lng: -73.85263 },
  { stationCode: "R220", stationName: "CARROLL ST", lat: 40.680231, lng: -73.99498 },
  { stationCode: "R221", stationName: "167 ST", lat: 40.835535, lng: -73.92138 },
  { stationCode: "R222", stationName: "E 177 ST-PARKCH", lat: 40.833246, lng: -73.860805 },
  { stationCode: "R223", stationName: "46 ST-BLISS ST", lat: 40.743079, lng: -73.918419 },
  { stationCode: "R224", stationName: "CLARK ST", lat: 40.697356, lng: -73.992888 },
  { stationCode: "R225", stationName: "HOYT ST", lat: 40.690547, lng: -73.985066 },
  { stationCode: "R226", stationName: "GUN HILL ROAD", lat: 40.877796, lng: -73.866341 },
  { stationCode: "R227", stationName: "RECTOR ST", lat: 40.707222, lng: -74.013391 },
  { stationCode: "R228", stationName: "AVE J", lat: 40.625028, lng: -73.960819 },
  { stationCode: "R229", stationName: "AVE M", lat: 40.617568, lng: -73.95936 },
  { stationCode: "R230", stationName: "NECK ROAD", lat: 40.595234, lng: -73.95509 },
  { stationCode: "R231", stationName: "UNION ST", lat: 40.677302, lng: -73.983135 },
  { stationCode: "R232", stationName: "45 ST", lat: 40.648866, lng: -74.010086 },
  { stationCode: "R233", stationName: "53 ST", lat: 40.644959, lng: -74.014034 },
  { stationCode: "R234", stationName: "50 ST", lat: 40.636232, lng: -73.994765 },
  { stationCode: "R235", stationName: "BEDFORD AVE", lat: 40.717241, lng: -73.956614 },
  { stationCode: "R236", stationName: "DEKALB AVE", lat: 40.703839, lng: -73.91844 },
  { stationCode: "R237", stationName: "182-183 ST", lat: 40.856085, lng: -73.900695 },
  { stationCode: "R238", stationName: "STEINWAY ST", lat: 40.756864, lng: -73.920736 },
  { stationCode: "R239", stationName: "GREENPOINT AVE", lat: 40.731324, lng: -73.954425 },
  { stationCode: "R240", stationName: "GRAND ST", lat: 40.718542, lng: -73.994164 },
  { stationCode: "R241", stationName: "15 ST-PROSPECT", lat: 40.660376, lng: -73.979509 },
  { stationCode: "R242", stationName: "18 AVE", lat: 40.629881, lng: -73.977149 },
  { stationCode: "R243", stationName: "170 ST", lat: 40.840048, lng: -73.917775 },
  { stationCode: "R244", stationName: "BURNSIDE AVE", lat: 40.85339, lng: -73.907733 },
  { stationCode: "R245", stationName: "ST LAWRENCE AVE", lat: 40.8315, lng: -73.867623 },
  { stationCode: "R246", stationName: "PROSPECT AVE", lat: 40.665438, lng: -73.992856 },
  { stationCode: "R247", stationName: "55 ST", lat: 40.631412, lng: -73.995473 },
  { stationCode: "R248", stationName: "1 AVE", lat: 40.730901, lng: -73.981719 },
  { stationCode: "R249", stationName: "GRAHAM AVE", lat: 40.71459, lng: -73.944104 },
  { stationCode: "R250", stationName: "GRAND ST", lat: 40.711874, lng: -73.94067 },
  { stationCode: "R251", stationName: "96 ST", lat: 40.791654, lng: -73.964682 },
  { stationCode: "R252", stationName: "HIGH ST", lat: 40.699316, lng: -73.990474 },
  { stationCode: "R253", stationName: "174-175 ST", lat: 40.845892, lng: -73.910136 },
  { stationCode: "R254", stationName: "GRAND AV-NEWTON", lat: 40.736998, lng: -73.877242 },
  { stationCode: "R255", stationName: "VAN WYCK BLVD", lat: 40.709174, lng: -73.820593 },
  { stationCode: "R256", stationName: "NASSAU AV", lat: 40.724608, lng: -73.951271 },
  { stationCode: "R257", stationName: "EAST BROADWAY", lat: 40.713647, lng: -73.990152 },
  { stationCode: "R258", stationName: "4 AVE", lat: 40.67032, lng: -73.988757 },
  { stationCode: "R259", stationName: "ROOSEVELT IS", lat: 40.759123, lng: -73.953266 },
  { stationCode: "R260", stationName: "181 ST", lat: 40.849495, lng: -73.933632 },
  { stationCode: "R261", stationName: "40 ST-LOWERY ST", lat: 40.743778, lng: -73.923998 },
  { stationCode: "R262", stationName: "BEVERLEY ROAD", lat: 40.643982, lng: -73.96451 },
  { stationCode: "R263", stationName: "AVE H", lat: 40.629164, lng: -73.961678 },
  { stationCode: "R264", stationName: "OCEAN PARKWAY", lat: 40.576298, lng: -73.968523 },
  { stationCode: "R265", stationName: "MONTROSE AVE", lat: 40.707889, lng: -73.940005 },
  { stationCode: "R266", stationName: "HALSEY ST", lat: 40.695607, lng: -73.904021 },
  { stationCode: "R267", stationName: "46 ST", lat: 40.756312, lng: -73.913333 },
  { stationCode: "R268", stationName: "LORIMER ST", lat: 40.713875, lng: -73.951592 },
  { stationCode: "R269", stationName: "BEDFORD/NOSTRAN", lat: 40.689636, lng: -73.953459 },
  { stationCode: "R270", stationName: "SMITH-9 ST", lat: 40.673714, lng: -73.996139 },
  { stationCode: "R271", stationName: "AVE X", lat: 40.589547, lng: -73.974295 },
  { stationCode: "R272", stationName: "28 ST", lat: 40.747224, lng: -73.99336 },
  { stationCode: "R273", stationName: "145 ST", lat: 40.826426, lng: -73.950412 },
  { stationCode: "R274", stationName: "191 ST", lat: 40.855176, lng: -73.929384 },
  { stationCode: "R275", stationName: "183 ST", lat: 40.858389, lng: -73.903828 },
  { stationCode: "R276", stationName: "VERNON/JACKSON", lat: 40.742624, lng: -73.953545 },
  { stationCode: "R277", stationName: "PRESIDENT ST", lat: 40.667879, lng: -73.950648 },
  { stationCode: "R278", stationName: "25 ST", lat: 40.660481, lng: -73.998059 },
  { stationCode: "R279", stationName: "JEFFERSON ST", lat: 40.706636, lng: -73.922925 },
  { stationCode: "R280", stationName: "190 ST", lat: 40.859022, lng: -73.93419 },
  { stationCode: "R281", stationName: "72 ST", lat: 40.775545, lng: -73.976398 },
  { stationCode: "R282", stationName: "SPRING ST", lat: 40.726202, lng: -74.003627 },
  { stationCode: "R283", stationName: "LAFAYETTE AVE", lat: 40.68617, lng: -73.973908 },
  { stationCode: "R284", stationName: "CLINTON-WASH AV", lat: 40.683263, lng: -73.965838 },
  { stationCode: "R285", stationName: "FAR ROCKAWAY", lat: 40.603983, lng: -73.755383 },
  { stationCode: "R286", stationName: "MYRTLE-WILLOUGH", lat: 40.694568, lng: -73.949046 },
  { stationCode: "R287", stationName: "CLASSON AVE", lat: 40.688855, lng: -73.960025 },
  { stationCode: "R288", stationName: "7 AV-PARK SLOPE", lat: 40.666276, lng: -73.980324 },
  { stationCode: "R289", stationName: "FT HAMILTON PKY", lat: 40.650722, lng: -73.975818 },
  { stationCode: "R290", stationName: "HOUSTON ST", lat: 40.728202, lng: -74.005344 },
  { stationCode: "R291", stationName: "33 ST/RAWSON ST", lat: 40.744558, lng: -73.930993 },
  { stationCode: "R292", stationName: "BAYCHESTER AVE", lat: 40.878656, lng: -73.838596 },
  { stationCode: "R293", stationName: "34 ST-PENN STA", lat: 40.750264, lng: -73.992984 },
  { stationCode: "R294", stationName: "MORGAN AVE", lat: 40.706148, lng: -73.93316 },
  { stationCode: "R295", stationName: "WILSON AVE", lat: 40.688676, lng: -73.903999 },
  { stationCode: "R296", stationName: "163 ST-AMSTERDM", lat: 40.835957, lng: -73.939898 },
  { stationCode: "R297", stationName: "FRANKLIN AVE", lat: 40.681159, lng: -73.956056 },
  { stationCode: "R298", stationName: "NORTHERN BLVD", lat: 40.752898, lng: -73.905973 },
  { stationCode: "R299", stationName: "BROADWAY", lat: 40.7061, lng: -73.950348 },
  { stationCode: "R300", stationName: "2 AVE", lat: 40.723291, lng: -73.989873 },
  { stationCode: "R301", stationName: "YORK ST", lat: 40.699756, lng: -73.98689 },
  { stationCode: "R302", stationName: "57 ST", lat: 40.763625, lng: -73.977449 },
  { stationCode: "R303", stationName: "21 ST", lat: 40.7541, lng: -73.94258 },
  { stationCode: "R304", stationName: "RECTOR ST", lat: 40.70784, lng: -74.013691 },
  { stationCode: "R305", stationName: "CORTLANDT ST", lat: 40.710454, lng: -74.011324 },
  { stationCode: "R306", stationName: "238 ST", lat: 40.884821, lng: -73.900759 },
  { stationCode: "R307", stationName: "138 ST-GR CONC", lat: 40.813208, lng: -73.929877 },
  { stationCode: "R308", stationName: "MT EDEN AVE", lat: 40.844406, lng: -73.914621 },
  { stationCode: "R309", stationName: "176 ST", lat: 40.848635, lng: -73.912497 },
  { stationCode: "R310", stationName: "111 ST", lat: 40.75176, lng: -73.855183 },
  { stationCode: "R311", stationName: "BOWERY", lat: 40.720315, lng: -73.994014 },
  { stationCode: "R312", stationName: "W 8 ST-AQUARIUM", lat: 40.576152, lng: -73.975925 },
  { stationCode: "R313", stationName: "BUSHWICK AVE", lat: 40.682558, lng: -73.905501 },
  { stationCode: "R314", stationName: "103 ST", lat: 40.796105, lng: -73.961399 },
  { stationCode: "R315", stationName: "155 ST", lat: 40.829934, lng: -73.938632 },
  { stationCode: "R316", stationName: "FLUSHING AVE", lat: 40.700374, lng: -73.950284 },
  { stationCode: "R317", stationName: "CLINTON-WASH AV", lat: 40.688123, lng: -73.966742 },
  { stationCode: "R318", stationName: "FULTON ST", lat: 40.68713, lng: -73.975346 },
  { stationCode: "R319", stationName: "LEXINGTON AVE", lat: 40.764763, lng: -73.966291 },
  { stationCode: "R320", stationName: "CANAL ST", lat: 40.722819, lng: -74.006267 },
  { stationCode: "R321", stationName: "18 ST", lat: 40.741096, lng: -73.997877 },
  { stationCode: "R322", stationName: "SPRING ST", lat: 40.722397, lng: -73.997211 },
  { stationCode: "R323", stationName: "110 ST-CPN", lat: 40.79911, lng: -73.951807 },
  { stationCode: "R324", stationName: "116 ST", lat: 40.802098, lng: -73.949625 },
  { stationCode: "R325", stationName: "WHITLOCK AVE", lat: 40.826508, lng: -73.886425 },
  { stationCode: "R326", stationName: "ZEREGA AVE", lat: 40.83646, lng: -73.846471 },
  { stationCode: "R327", stationName: "52 ST-LINCOLN", lat: 40.744103, lng: -73.912497 },
  { stationCode: "R328", stationName: "METS-WILLETS PT", lat: 40.754622, lng: -73.845625 },
  { stationCode: "R329", stationName: "MORRIS PARK", lat: 40.854137, lng: -73.860977 },
  { stationCode: "R330", stationName: "3 AVE", lat: 40.733243, lng: -73.987169 },
  { stationCode: "R331", stationName: "155 ST", lat: 40.830551, lng: -73.941486 },
  { stationCode: "R332", stationName: "135 ST", lat: 40.817902, lng: -73.947644 },
  { stationCode: "R333", stationName: "116 ST", lat: 40.805072, lng: -73.954833 },
  { stationCode: "R334", stationName: "CATHEDRL-110 ST", lat: 40.800637, lng: -73.958201 },
  { stationCode: "R335", stationName: "BEACH 67 ST", lat: 40.590867, lng: -73.797011 },
  { stationCode: "R336", stationName: "BEACH 60 ST", lat: 40.592334, lng: -73.788493 },
  { stationCode: "R337", stationName: "BEACH 44 ST", lat: 40.593214, lng: -73.776433 },
  { stationCode: "R338", stationName: "BEACH 36 ST", lat: 40.595381, lng: -73.768194 },
  { stationCode: "R339", stationName: "36 ST", lat: 40.75202, lng: -73.92874 },
  { stationCode: "R340", stationName: "65 ST", lat: 40.749663, lng: -73.898485 },
  { stationCode: "R341", stationName: "75 AVE", lat: 40.718477, lng: -73.837223 },
  { stationCode: "R342", stationName: "JAMAICA-VAN WYC", lat: 40.702566, lng: -73.816859 },
  { stationCode: "R343", stationName: "FRANKLIN ST", lat: 40.719323, lng: -74.006953 },
  { stationCode: "R344", stationName: "145 ST", lat: 40.820402, lng: -73.936315 },
  { stationCode: "R345", stationName: "148 ST-LENOX", lat: 40.823877, lng: -73.936443 },
  { stationCode: "R346", stationName: "COURT SQ", lat: 40.747029, lng: -73.94537 },
  { stationCode: "R347", stationName: "69 ST-FISK AVE", lat: 40.746325, lng: -73.896403 },
  { stationCode: "R348", stationName: "ATLANTIC AVE", lat: 40.675496, lng: -73.902819 },
  { stationCode: "R349", stationName: "SUTTER AVE", lat: 40.669376, lng: -73.902047 },
  { stationCode: "R350", stationName: "LIVONIA AVE", lat: 40.663801, lng: -73.900444 },
  { stationCode: "R352", stationName: "HEWES ST", lat: 40.706994, lng: -73.953481 },
  { stationCode: "R353", stationName: "LORIMER ST", lat: 40.703855, lng: -73.947387 },
  { stationCode: "R354", stationName: "OXFORD-104 ST", lat: 40.681745, lng: -73.837631 },
  { stationCode: "R355", stationName: "GREENWOOD-111", lat: 40.684364, lng: -73.832181 },
  { stationCode: "R356", stationName: "LEFFERTS BLVD", lat: 40.685975, lng: -73.824713 },
  { stationCode: "R357", stationName: "AQUEDUCT-N CNDT", lat: 40.668234, lng: -73.834058 },
  { stationCode: "R358", stationName: "BEACH 25 ST", lat: 40.600138, lng: -73.76152 },
  { stationCode: "R359", stationName: "COURT SQ-23 ST", lat: 40.747257, lng: -73.945112 },
  { stationCode: "R360", stationName: "VAN ALSTON-21ST", lat: 40.743973, lng: -73.949876 },
  { stationCode: "R361", stationName: "PELHAM PARKWAY", lat: 40.857188, lng: -73.867607 },
  { stationCode: "R362", stationName: "ALLERTON AVE", lat: 40.865481, lng: -73.867393 },
  { stationCode: "R363", stationName: "BURKE AVE", lat: 40.871387, lng: -73.867135 },
  { stationCode: "R364", stationName: "GUN HILL ROAD", lat: 40.877796, lng: -73.866255 },
  { stationCode: "R365", stationName: "219 ST", lat: 40.883767, lng: -73.862736 },
  { stationCode: "R366", stationName: "225 ST", lat: 40.887887, lng: -73.860505 },
  { stationCode: "R367", stationName: "233 ST", lat: 40.893386, lng: -73.857265 },
  { stationCode: "R368", stationName: "9 AVE", lat: 40.646343, lng: -73.994551 },
  { stationCode: "R369", stationName: "FT HAMILTON PKY", lat: 40.640872, lng: -73.994229 },
  { stationCode: "R370", stationName: "71 ST", lat: 40.619588, lng: -73.998842 },
  { stationCode: "R371", stationName: "79 ST", lat: 40.613513, lng: -74.000645 },
  { stationCode: "R372", stationName: "18 AVE", lat: 40.607958, lng: -74.001782 },
  { stationCode: "R373", stationName: "20 AVE", lat: 40.604798, lng: -73.998456 },
  { stationCode: "R374", stationName: "BAY PARKWAY", lat: 40.601898, lng: -73.993821 },
  { stationCode: "R375", stationName: "NEW LOTS AVE", lat: 40.658748, lng: -73.899472 },
  { stationCode: "R376", stationName: "EAST 105 ST", lat: 40.650625, lng: -73.899558 },
  { stationCode: "R377", stationName: "FLUSHING AVE", lat: 40.700244, lng: -73.941658 },
  { stationCode: "R378", stationName: "MYRTLE AVE", lat: 40.697266, lng: -73.935692 },
  { stationCode: "R379", stationName: "KOSCIUSZKO ST", lat: 40.693329, lng: -73.928826 },
  { stationCode: "R380", stationName: "GATES AVE", lat: 40.689652, lng: -73.922281 },
  { stationCode: "R381", stationName: "HALSEY ST", lat: 40.68617, lng: -73.916337 },
  { stationCode: "R382", stationName: "GRANT AVE", lat: 40.677107, lng: -73.865376 },
  { stationCode: "R383", stationName: "HUDSON-80 ST", lat: 40.679369, lng: -73.85896 },
  { stationCode: "R384", stationName: "BOYD-88 ST", lat: 40.679857, lng: -73.851492 },
  { stationCode: "R385", stationName: "ROCKAWAY BLVD", lat: 40.680429, lng: -73.843853 },
  { stationCode: "R386", stationName: "174 ST", lat: 40.837382, lng: -73.887659 },
  { stationCode: "R387", stationName: "E TREMONT AVE", lat: 40.840097, lng: -73.879774 },
  { stationCode: "R388", stationName: "E 180 ST", lat: 40.841882, lng: -73.873551 },
  { stationCode: "R389", stationName: "BRONX PARK EAST", lat: 40.848797, lng: -73.868465 },
  { stationCode: "R390", stationName: "8 AVE", lat: 40.635011, lng: -74.011717 },
  { stationCode: "R391", stationName: "FT HAMILTON PKY", lat: 40.631428, lng: -74.005387 },
  { stationCode: "R392", stationName: "18 AVE", lat: 40.620728, lng: -73.990388 },
  { stationCode: "R393", stationName: "20 AVE", lat: 40.617373, lng: -73.985088 },
  { stationCode: "R394", stationName: "BAY PKY-22 AVE", lat: 40.612006, lng: -73.982009 },
  { stationCode: "R395", stationName: "KINGS HIGHWAY", lat: 40.603967, lng: -73.980668 },
  { stationCode: "R396", stationName: "AVE U", lat: 40.597482, lng: -73.979359 },
  { stationCode: "R397", stationName: "86 ST", lat: 40.592676, lng: -73.978243 },
  { stationCode: "R398", stationName: "NEW UTRECHT AVE", lat: 40.625419, lng: -73.996632 },
  { stationCode: "R399", stationName: "25 AVE", lat: 40.597873, lng: -73.986955 },
  { stationCode: "R400", stationName: "BAY 50 ST", lat: 40.588879, lng: -73.983629 },
  { stationCode: "R401", stationName: "CENTRAL AVE", lat: 40.697673, lng: -73.927131 },
  { stationCode: "R402", stationName: "SENECA AVE", lat: 40.702798, lng: -73.907776 },
  { stationCode: "R403", stationName: "FOREST AVE", lat: 40.704424, lng: -73.903077 },
  { stationCode: "R404", stationName: "FRESH POND ROAD", lat: 40.706181, lng: -73.89591 },
  { stationCode: "R405", stationName: "JACKSON AVE", lat: 40.816505, lng: -73.907797 },
  { stationCode: "R406", stationName: "PROSPECT AVE", lat: 40.819396, lng: -73.901467 },
  { stationCode: "R407", stationName: "INTERVALE-163", lat: 40.822172, lng: -73.896747 },
  { stationCode: "R408", stationName: "SIMPSON ST", lat: 40.82417, lng: -73.893228 },
  { stationCode: "R409", stationName: "FREEMAN ST", lat: 40.829966, lng: -73.891876 },
  { stationCode: "R411", stationName: "PARK PLACE", lat: 40.67491, lng: -73.957794 },
  { stationCode: "R412", stationName: "BOTANIC GARDEN", lat: 40.670499, lng: -73.958759 },
  { stationCode: "R413", stationName: "KNICKERBOCKER", lat: 40.698666, lng: -73.919685 },
  { stationCode: "R414", stationName: "HOWARD BCH-JFK", lat: 40.660476, lng: -73.830301 },
  { stationCode: "R415", stationName: "BROAD CHANNEL", lat: 40.608693, lng: -73.816068 },
  { stationCode: "R416", stationName: "BEACH 90 ST", lat: 40.588032, lng: -73.813684 },
  { stationCode: "R417", stationName: "BEACH 98 ST", lat: 40.585514, lng: -73.820143 },
  { stationCode: "R418", stationName: "BEACH 105 ST", lat: 40.583542, lng: -73.82643 },
  { stationCode: "R419", stationName: "ROCKAWAY PK 116", lat: 40.580454, lng: -73.837459 },
  { stationCode: "R420", stationName: "DITMAS AVE", lat: 40.63615, lng: -73.978179 },
  { stationCode: "R421", stationName: "AVE I", lat: 40.625305, lng: -73.975732 },
  { stationCode: "R422", stationName: "22 AVE-BAY PKY", lat: 40.620907, lng: -73.975453 },
  { stationCode: "R423", stationName: "AVE N", lat: 40.615174, lng: -73.974166 },
  { stationCode: "R424", stationName: "AVE P", lat: 40.609147, lng: -73.972986 },
  { stationCode: "R425", stationName: "AVE U", lat: 40.596065, lng: -73.973329 },
  { stationCode: "R426", stationName: "NEPTUNE AVE", lat: 40.580992, lng: -73.974531 },
  { stationCode: "R427", stationName: "MIDDLETOWN ROAD", lat: 40.843635, lng: -73.836687 },
  { stationCode: "R428", stationName: "BUHRE AVE", lat: 40.846817, lng: -73.832545 },
  { stationCode: "R429", stationName: "PELHAM BAY PARK", lat: 40.852465, lng: -73.828125 },
  { stationCode: "R430", stationName: "PELHAM PARKWAY", lat: 40.858973, lng: -73.855355 },
  { stationCode: "R431", stationName: "DYRE AVE", lat: 40.888244, lng: -73.83085 },
  { stationCode: "R432", stationName: "CHAUNCEY ST", lat: 40.682867, lng: -73.91048 },
  { stationCode: "R433", stationName: "ALABAMA AVE", lat: 40.677107, lng: -73.898871 },
  { stationCode: "R434", stationName: "VAN SICLEN AVE", lat: 40.678018, lng: -73.891726 },
  { stationCode: "R435", stationName: "CLEVELAND ST", lat: 40.679938, lng: -73.884687 },
  { stationCode: "R436", stationName: "NORWOOD AVE", lat: 40.681598, lng: -73.880074 },
  { stationCode: "R437", stationName: "CRESCENT ST", lat: 40.683209, lng: -73.873765 },
  { stationCode: "R438", stationName: "RALPH AVE", lat: 40.678815, lng: -73.920801 },
  { stationCode: "R439", stationName: "ROCKAWAY AVE", lat: 40.67836, lng: -73.911939 },
  { stationCode: "R440", stationName: "LIBERTY AVE", lat: 40.674552, lng: -73.896554 },
  { stationCode: "R441", stationName: "VAN SICLEN AVE", lat: 40.672786, lng: -73.890438 },
  { stationCode: "R442", stationName: "SHEPHERD AVE", lat: 40.674161, lng: -73.880761 },
  { stationCode: "R443", stationName: "170 ST", lat: 40.839301, lng: -73.913355 },
  { stationCode: "R444", stationName: "NEREID AVE", lat: 40.898382, lng: -73.854389 },
  { stationCode: "R445", stationName: "138 ST-3 AVE", lat: 40.810512, lng: -73.926165 },
  { stationCode: "R446", stationName: "BROOK AVE", lat: 40.808044, lng: -73.919234 },
  { stationCode: "R447", stationName: "CYPRESS AVE", lat: 40.805737, lng: -73.914471 },
  { stationCode: "R448", stationName: "E 143 ST", lat: 40.808742, lng: -73.90769 },
  { stationCode: "R449", stationName: "E 149 ST", lat: 40.812104, lng: -73.904085 },
  { stationCode: "R450", stationName: "LONGWOOD AVE", lat: 40.816083, lng: -73.89606 },
  { stationCode: "R451", stationName: "WINTHROP ST", lat: 40.656648, lng: -73.950198 },
  { stationCode: "R452", stationName: "72 ST", lat: 40.778575, lng: -73.981912 },
  { stationCode: "R453", stationName: "23 ST-6 AVE", lat: 40.742981, lng: -73.992727 },
  { stationCode: "R454", stationName: "PROSPECT AVE", lat: 40.665405, lng: -73.992877 },
  { stationCode: "R455", stationName: "25 ST", lat: 40.66043, lng: -73.997944 },
  { stationCode: "R456", stationName: "HOYT ST", lat: 40.690545, lng: -73.985065 },
  { stationCode: "R459", stationName: "ORCHARD BEACH", lat: 40.852417, lng: -73.828082 },
  { stationCode: "R460", stationName: "MARCY AVE", lat: 40.708377, lng: -73.957751 },
  { stationCode: "R461", stationName: "BROADWAY/LAFAY", lat: 40.725297, lng: -73.996204 },
  { stationCode: "R462", stationName: "CANAL ST", lat: 40.718697, lng: -74.000977 },
  { stationCode: "R463", stationName: "CANAL ST", lat: 40.718697, lng: -74.000977 },
  { stationCode: "R464", stationName: "AQUEDUCT TRACK", lat: 40.668221, lng: -73.834026 },
  { stationCode: "R468", stationName: "RIT-MANHATTAN", lat: 40.761268, lng: -73.964016 },
  { stationCode: "R469", stationName: "RIT-ROOSEVELT", lat: 40.7574, lng: -73.954006 },
  { stationCode: "R470", stationName: "ELTINGVILLE PK", lat: 40.5446, lng: -74.164581 },
  { stationCode: "R535", stationName: "JFK HOWARD BCH", lat: 40.660476, lng: -73.830301 },
  { stationCode: "R536", stationName: "JFK JAMAICA CT1", lat: 40.643942, lng: -73.782356 },
  { stationCode: "R570", stationName: "72 ST-2 AVE", lat: 40.7686869, lng: -73.9584429 },
  { stationCode: "R571", stationName: "86 ST-2 AVE", lat: 40.7686862, lng: -73.9584429 },
  { stationCode: "R572", stationName: "96 ST-2 AVE", lat: 40.7807028, lng: -73.9494105 }
  ];  


const styles = [
  {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": [{ "saturation": 36 },
    { "color": "#000000" }, { "lightness": 40 }]
  },
  {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "visibility": "on"
      },
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "all",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      },
      {
        "weight": 1.2
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "saturation": "-100"
      },
      {
        "lightness": "30"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "simplified"
      },
      {
        "gamma": "0.00"
      },
      {
        "lightness": "74"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 20
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "all",
    "stylers": [
      {
        "lightness": "3"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 21
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 29
      },
      {
        "weight": 0.2
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 18
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 16
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 19
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 17
      }
    ]
  }
];

