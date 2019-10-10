$(document).ready(function() {
  let heaterKit = [
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  ];

  let smoothPianoKit = [
    "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  ];

  let audioClip = {
    heaterKit: {
      Q: {
        name: "Heater-1",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
      },
      W: {
        name: "Heater-2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      E: {
        name: "Heater-3",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      A: {
        name: "Heater-4",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      S: {
        name: "Heater-6",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      D: {
        name: "Clap",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      Z: {
        name: "Open-HH",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      X: {
        name: "kickheat",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      C: {
        name: "kick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    },
    smoothPianoKit: {
      Q: {
        name: "Chord-1",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      },
      W: {
        name: "Chord-2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
      },
      E: {
        name: "Chord-3",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      },
      A: {
        name: "Shaker",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
      },
      S: {
        name: "Closed-HH",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      },
      D: {
        name: "Closed-HH2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
      },
      Z: {
        name: "Punchy-Kit",
        src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      },
      X: {
        name: "Side-Kick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      },
      C: {
        name: "Snare",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      }
    }
  };
  $(".drum-pad").click(function() {
    if ($("#power-btn").is(":checked")) {
      $(this)
        .children()
        .get(0)
        .play();
      $("#volume").text(
        $(this)
          .attr("id")
          .replace("-", " ")
      );
      if (!$("#mode-switch").is(":checked")) {
        let getId = $(this)
          .children()
          .attr("id");
        $("#" + getId)
          .get(0)
          .play();

        let getName = $(this).attr("id", audioClip.heaterKit[getId].name);

        $("#volume").text(
          $(this)
            .attr("id")
            .replace("-", " ")
        );
      } else {
        let getId = $(this)
          .children()
          .attr("id");
        $("#" + getId)
          .get(0)
          .play();

        let getName = $(this).attr("id", audioClip.smoothPianoKit[getId].name);
        $("#volume").text(
          $(this)
            .attr("id")
            .replace("-", " ")
        );
      }
    }
  });

  $(document).on("keypress", function(e) {
    var keyCode = e.which || e.code;
    if ($("#power-btn").is(":checked")) {
      if ($("#" + String.fromCharCode(keyCode).toUpperCase()).get(0)) {
        $("#" + String.fromCharCode(keyCode).toUpperCase())
          .get(0)
          .play();
        $("#volume").text(
          $("#" + String.fromCharCode(keyCode).toUpperCase())
            .get(0)
            .parentElement.id.replace("-", " ")
        );
      }
    }
  });

  $(document).on("keypress", function(e) {
    var keyCode = e.which || e.code;
    if ($("#power-btn").is(":checked")) {
      let savedKey = [113, 119, 101, 97, 115, 100, 122, 120, 99];
      if (savedKey.includes(keyCode)) {
        if ($("#mode-switch").is(":checked")) {
          let storeId = String.fromCharCode(keyCode).toUpperCase();
          $("#" + storeId)
            .get(0)
            .play();
          let getName = $(this).attr(
            "id",
            audioClip.smoothPianoKit[storeId].name
          );
          $("#volume").text(
            $(this)
              .attr("id")
              .replace("-", " ")
          );
        } else {
          let storeId = String.fromCharCode(keyCode).toUpperCase();
          $("#" + storeId)
            .get(0)
            .play();
        }
      }
    }
  });

  $("#mode-switch").on("change", function() {
    var kitType;
    if ($("#mode-switch").is(":checked")) {
      $("#volume").text("Smooth Piano");
      kitType = smoothPianoKit;
    } else {
      $("#volume").text("Heater Kit");
      kitType = heaterKit;
    }
    var audioElements = document.getElementsByClassName("clip");
    for (let i = 0; i < audioElements.length; i++) {
      audioElements[i].src = kitType[i];
    }
  });

  $("#power-btn").on("change", function() {
    if (!$("#power-btn").is(":checked")) {
      $("#volume").text("");
      $("#vol-range").attr("disabled", "disabled");
      $("#mode-switch").attr("disabled", "disabled");
    } else {
      $("#vol-range").removeAttr("disabled");
      $("#mode-switch").removeAttr("disabled");
    }
  });

  for (let element of $(".clip")) {
    element.volume = 0.3;
  }

  $("#vol-range").on("input", function() {
    $("#volume").text("Volume: " + $("#vol-range").val());
  });

  $("#vol-range").on("change", function() {
    setTimeout(() => {
      $("#volume").text("");
    }, 1000);
    for (let element of $(".clip")) {
      element.volume = $("#vol-range").val() / 100;
    }
  });
});
