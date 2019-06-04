/* global vexchords */
/* eslint-disable prefer-destructuring, comma-dangle  */

const mickeyb = {};
mickeyb.says = 'h1';

const ChordBox = vexchords.ChordBox;

const chordChart = [
  {
    section: 'Chord Form Group A (1 through 14)',
    description: 'Root of the tonic chord is on the 6th string',
    chords: [
      {
        number: 1,
        name: 'G',
        chord: [
          [1, 3, 1],
          [2, 3, 1],
          [3, 4, 2],
          [4, 5, 4],
          [5, 5, 3],
          [6, 3, 1]
        ],
        position: 0
      },
      {
        number: 2,
        name: 'Gma7',
        chord: [[1, 'x'], [2, 3, 2], [3, 4, 4], [4, 4, 3], [5, 'x'], [6, 3, 1]],
        position: 0
      },
      {
        number: 3,
        name: 'Gma6',
        chord: [[1, 'x'], [2, 3, 3], [3, 4, 4], [4, 2, 1], [5, 'x'], [6, 3, 2]],
        position: 0
      },
      {
        number: 4,
        name: 'Ami7',
        chord: [
          [1, 3, 3],
          [2, 3, 3],
          [3, 3, 3],
          [4, 3, 3],
          [5, 'x'],
          [6, 3, 2]
        ],
        position: 5,
        positionText: 2
      },
      {
        number: 5,
        name: 'Ami6',
        chord: [
          [1, 3, 3],
          [2, 3, 3],
          [3, 3, 3],
          [4, 2, 1],
          [5, 'x'],
          [6, 3, 2]
        ],
        position: 5,
        positionText: 2
      },
      {
        number: 6,
        name: 'D13♭5♭9',
        chord: [
          [1, 5, 4],
          [2, 5, 4],
          [3, 3, 2],
          [4, 'x'],
          [5, 4, 3],
          [6, 2, 1]
        ],
        position: 4,
        positionText: 1
      },
      {
        number: 7,
        name: 'Gma7',
        chord: [
          [1, 5, 4],
          [2, 5, 4],
          [3, 2, 2],
          [4, 'x'],
          [5, 3, 3],
          [6, 1, 1]
        ],
        position: 3
      },
      {
        number: 8,
        name: 'Gma7 or Emi9',
        chord: [[1, 'x'], [2, 5, 4], [3, 5, 3], [4, 3, 1], [5, 'x'], [6, 5, 2]],
        position: 7,
        positionText: 4
      },
      {
        number: 9,
        name: 'A13♭9',
        chord: [[1, 'x'], [2, 5, 4], [3, 4, 3], [4, 3, 1], [5, 'x'], [6, 4, 2]],
        position: 6,
        positionText: 3
      },
      {
        number: 10,
        name: 'D13',
        chord: [[1, 5, 4], [2, 3, 2], [3, 3, 2], [4, 2, 1], [5, 'x'], [6, 'x']],
        position: 7,
        positionText: 4
      },
      {
        number: 11,
        name1: 'D13♭9',
        name: 'D13b9',
        chord: [[1, 5, 4], [2, 2, 1], [3, 3, 2], [4, 2, 1], [5, 'x'], [6, 'x']],
        position: 7,
        positionText: 4
      },
      {
        number: 12,
        name: 'Gma6',
        chord: [[1, 3, 2], [2, 3, 2], [3, 4, 3], [4, 2, 1], [5, 'x'], [6, 'x']],
        position: 0
      },
      {
        number: 13,
        name: 'D11',
        chord: [[1, 'x'], [2, 3, 1], [3, 5, 4], [4, 5, 3], [5, 'x'], [6, 5, 2]],
        position: 0
      },
      {
        number: 14,
        name: 'D7♭5',
        chord: [[1, 'x'], [2, 3, 1], [3, 5, 4], [4, 4, 3], [5, 'x'], [6, 4, 2]],
        position: 0
      }
    ]
  },
  {
    section: 'Chord Form Group B (15 through 26)',
    description:
      'Chords in Group B will have the tonic or root of the key on the 5th string plus their associated chords near that position',
    chords: [
      {
        number: 15,
        name: 'C',
        chord: [
          [1, 'x'],
          [2, 5, 3],
          [3, 5, 3],
          [4, 5, 3],
          [5, 3, 1],
          [6, 3, 1]
        ],
        position: 0
      },
      {
        number: 16,
        name: 'Cma7',
        chord: [[1, 'x'], [2, 5, 4], [3, 4, 2], [4, 5, 3], [5, 3, 1], [6, 'x']],
        position: 0
      },
      {
        number: 17,
        name: 'Cma6',
        chord: [[1, 'x'], [2, 5, 4], [3, 2, 1], [4, 2, 1], [5, 3, 2], [6, 'x']],
        position: 0
      },
      {
        number: 18,
        name: 'Dmi7',
        chord: [[1, 2, 3], [2, 3, 4], [3, 2, 2], [4, 'x'], [5, 2, 1], [6, 'x']],
        position: 5,
        positionText: 1
      },
      {
        number: 19,
        name: 'Dmi6',
        chord: [[1, 2, 3], [2, 3, 4], [3, 1, 1], [4, 'x'], [5, 2, 2], [6, 'x']],
        position: 5,
        positionText: 1
      },
      {
        number: 20,
        name: 'Dmi7',
        chord: [[1, 5, 4], [2, 3, 2], [3, 'x'], [4, 4, 3], [5, 2, 1], [6, 'x']],
        position: 5,
        positionText: 1
      },
      {
        number: 21,
        name1: 'G7♯5♭9',
        name: 'G7♯5b9',
        chord: [
          [1, 4, 3],
          [2, 4, 3],
          [3, 4, 3],
          [4, 3, 2],
          [5, 'x'],
          [6, 3, 1]
        ],
        position: 0,
        numFrets: 6
      },
      {
        number: 22,
        name: 'Cma9',
        chord: [
          [1, 3, 3],
          [2, 3, 3],
          [3, 2, 1],
          [4, 2, 1],
          [5, 3, 2],
          [6, 'x']
        ],
        position: 0,
        numFrets: 6
      },
      {
        number: 23,
        name: 'G13',
        chord: [
          [1, 5, 4],
          [2, 5, 4],
          [3, 4, 3],
          [4, 3, 2],
          [5, 'x'],
          [6, 3, 1]
        ],
        position: 0,
        numFrets: 6
      },
      {
        number: 24,
        name: 'G7♭5',
        chord: [[1, 'x'], [2, 6, 4], [3, 4, 2], [4, 'x'], [5, 4, 1], [6, 'x']],
        position: 0,
        numFrets: 6
      },
      {
        number: 25,
        name: 'G7',
        chord: [[1, 'x'], [2, 3, 3], [3, 4, 3], [4, 3, 2], [5, 'x'], [6, 3, 1]],
        position: 0,
        numFrets: 6
      },
      {
        number: 26,
        name: 'G♯dim',
        chord: [[1, 'x'], [2, 3, 1], [3, 4, 3], [4, 3, 1], [5, 'x'], [6, 4, 2]],
        position: 0,
        numFrets: 6
      }
    ]
  }
];

const chords = [];

function createChordElement(chordStruct) {
  const chordbox = $('<div>').addClass('chord');
  const chordcanvas = $('<div>');
  const chordname = $('<div>').addClass('chordname');
  const heading = $('<h3>').append(chordStruct.name);
  const number = $('<span>')
    .addClass('chordlabel')
    .append(chordStruct.number);

  chordname.append(number);
  chordname.append(heading);
  chordbox.append(chordname);
  chordbox.append(chordcanvas);

  chords.push({
    el: chordcanvas[0],
    struct: chordStruct
  });

  return chordbox;
}

function createSectionElement(sectionStruct) {
  const section = $('<div>').addClass('section');
  const sectionTitle = $('<div>').addClass('title');
  const sectionDesc = $('<div>').addClass('description');

  section.append(sectionTitle);
  section.append(sectionDesc);
  sectionTitle.append(sectionStruct.section);
  sectionDesc.append(sectionStruct.description);

  return section;
}

function init() {
  const container = $('#container');

  // Display preset chords (open chords)
  for (let i = 0; i < chordChart.length; i += 1) {
    const sectionStruct = chordChart[i];
    const section = createSectionElement(sectionStruct);

    for (let j = 0; j < sectionStruct.chords.length; j += 1) {
      section.append(createChordElement(sectionStruct.chords[j], j + 1));
    }

    container.append(section);
  }

  // Render chords
  chords.forEach(chord => {
    var struct = chord.struct;
    var numFrets = struct.numFrets || 5;
    new ChordBox(chord.el, {
      width: 260,
      height: numFrets * 60,
      numFrets: numFrets,
      defaultColor: '#444'
    }).draw(struct);
  });
}

$(function() {
  init();
});
