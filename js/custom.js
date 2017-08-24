var mapData = [
  {
    description: 'Het Hemelrijk,<br> Hemelrijk 11, 3500 Hasselt ',
    coordinates: {
      lat: 50.930083,
      lng: 5.339783
    }
  }, {
    description: 'De Cambrinus,<br> Dorpstraat 25, 3500 Hasselt',
    coordinates: {
      lat: 50.932234,
      lng: 5.334754
    }
  }, {
    description: 'Sportpunt Runkst,<br> Djef Swennenstraat 17, 3500 Hasselt',
    coordinates: {
      lat: 50.926514,
      lng: 5.319018
    }
  }, {
    description: 'Rugbyclub Hasselt,<br> Sint-Janshoefstraat z/n, 3511 Kuringen',
    coordinates: {
      lat: 50.952363,
      lng: 5.332323
    }
  }, {
    description: 'Bowling Epsilon,<br> Wijkstraat 39, 3590 Diepenbeek',
    coordinates: {
      lat: 50.907339,
      lng: 5.428882
    }
  }, {
    description: 'Cafe Den Hoek,<br> Dorpstraat 43, 3720 Kortessem ',
    coordinates: {
      lat: 50.857527,
      lng: 5.387035
    }
  }, {
    description: 'Cafe \'t Zant,<br> Halveweg 28, 3520 Zonhoven',
    coordinates: {
      lat: 50.992454,
      lng: 5.344344
    }
  }, {
    description: 'Marlou dranken Prik&tik,<br> Heikensstraat 11, 3520 Zonhoven',
    coordinates: {
      lat: 50.994703,
      lng: 5.338271
    }
  }, {
    description: 'Dranken Houben,<br> Rechterstraat 69, 3511 Kuringen',
    coordinates: {
      lat: 50.950854,
      lng: 5.336802
    }
  }, {
    description: 'Superette Jeli,<br> Blijde-Inkomststraat 45, 3500 Hasselt',
    coordinates: {
      lat: 50.935158,
      lng: 5.330882
    }
  }, {
    description: 'Spar Banneuxwijk,<br> Banneuxstraat 21, 3500 Hasselt',
    coordinates: {
      lat: 50.947000,
      lng: 5.348601
    }
  }, {
    description: 'Exciteria,<br> Lombaardstraat 10, 3500 Hasselt',
    coordinates: {
      lat: 50.930710,
      lng: 5.336693
    }
  }, {
    description: 'Het Pleintje,<br> Sint-Hubertusplein 19, 3500 Hasselt',
    coordinates: {
      lat: 50.924994,
      lng: 5.325815
    }
  }, {
    description: 'Sanlet,<br> Torenstraat 35, 3500 Hasselt',
    coordinates: {
      lat: 50.924749,
      lng: 5.328913
    }
  }, {
    description: 'Kan10 SYNTRA Limburg campus Hasselt,<br> 3500 Hasselt',
    coordinates: {
      lat: 50.937185,
      lng: 5.360710
    }
  }, {
    description: 'Dolce Ijssalon,<br> Stalkerweg 22, 3690 Zutendaal',
    coordinates: {
      lat: 50.928597,
      lng: 5.574990
    }
  }, {
    description: 'Daniëls Drinkmarket,<br> Hasseltsesteenweg 611, 3700 Tongeren',
    coordinates: {
      lat: 50.808220,
      lng: 5.430381
    }
  }, {
    description: 'Bowling Champion,<br> Zavelstraat 71, 3520 Zonhoven',
    coordinates: {
      lat: 50.995836,
      lng: 5.360370
    }
  }, {
    description: 'Bowling Anglo,<br> Kleinhulst 6, 9220 Hamme',
    coordinates: {
      lat: 51.097693,
      lng: 4.140037
    }
  }, {
    description: 'Quo Vadis,<br> Dorpsstraat 46, 3520 Zonhoven',
    coordinates: {
      lat: 50.993055,
      lng: 5.368186
    }
  }, {
    description: 'Mon Cafe,<br> Lombaardstraat 8, 3500 Hasselt',
    coordinates: {
      lat: 50.930683,
      lng: 5.336829
    }
  }, {
    description: 'Café Transport,<br> Stokrooieweg 35, 3511 Kuringen',
    coordinates: {
      lat: 50.973620,
      lng: 5.281823
    }
  }
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    scrollwheel: false,
    center: { lat: 50.9279681, lng: 5.337154 }
  });
  var infowindows = [];
  mapData.forEach(function(data) {
    var marker = new google.maps.Marker({
      position: data.coordinates,
      map: map,
      animation: google.maps.Animation.DROP,
      title: data.description
    });
    var infowindow = new google.maps.InfoWindow({
      content: '<h3>' + data.description + '</h3>'
    });
    infowindows.push(infowindow);
    marker.addListener('click', function() {
      infowindows.forEach(function(iw) { iw.close(); });
      infowindow.open(map, marker);
    });
  });
}
