import { Graph } from 'react-d3-graph';
import './App.css';

function App() {
  const data = {
  links: [
       {
           source: 1,
           target: 81,
           color: "purple"
       },
       {
           source: 2,
           target: 27,
           color: "red"
       },
       {
           source: 2,
           target: 136,
           color: "red"
       },
       {
           source: 2,
           target: 129,
           color: "blue"
       },
       {
           source: 2,
           target: 45,
           color: "blue"
       },
       {
           source: 3,
           target: 182,
           color: "blue"
       },
       {
           source: 3,
           target: 171,
           color: "blue"
       },
       {
           source: 3,
           target: 122,
           color: "blue"
       },
       {
           source: 4,
           target: 179,
           color: "blue"
       },
       {
           source: 4,
           target: 123,
           color: "blue"
       },
       {
           source: 4,
           target: 148,
           color: "blue"
       },
       {
           source: 5,
           target: 170,
           color: "blue"
       },
       {
           source: 5,
           target: 65,
           color: "blue"
       },
       {
           source: 5,
           target: 87,
           color: "red"
       },
       {
           source: 5,
           target: 101,
           color: "blue"
       },
       {
           source: 6,
           target: 178,
           color: "blue"
       },
       {
           source: 6,
           target: 60,
           color: "blue"
       },
       {
           source: 6,
           target: 105,
           color: "purple"
       },
       {
           source: 7,
           target: 125,
           color: "blue"
       },
       {
           source: 7,
           target: 169,
           color: "blue"
       },
       {
           source: 7,
           target: 38,
           color: "blue"
       },
       {
           source: 8,
           target: 156,
           color: "blue"
       },
       {
           source: 8,
           target: 120,
           color: "blue"
       },
       {
           source: 8,
           target: 185,
           color: "blue"
       },
       {
           source: 8,
           target: 128,
           color: "red"
       },
       {
           source: 9,
           target: 113,
           color: "yellow"
       },
       {
           source: 9,
           target: 93,
           color: "purple"
       },
       {
           source: 9,
           target: 76,
           color: "blue"
       },
       {
           source: 9,
           target: 149,
           color: "blue"
       },
       {
           source: 9,
           target: 58,
           color: "blue"
       },
       {
           source: 10,
           target: 41,
           color: "purple"
       },
       {
           source: 10,
           target: 32,
           color: "blue"
       },
       {
           source: 10,
           target: 12,
           color: "blue"
       },
       {
           source: 11,
           target: 154,
           color: "purple"
       },
       {
           source: 11,
           target: 74,
           color: "blue"
       },
       {
           source: 11,
           target: 87,
           color: "blue"
       },
       {
           source: 12,
           target: 32,
           color: "green"
       },
       {
           source: 12,
           target: 41,
           color: "blue"
       },
       {
           source: 13,
           target: 27,
           color: "black"
       },
       {
           source: 13,
           target: 29,
           color: "blue"
       },
       {
           source: 13,
           target: 51,
           color: "blue"
       },
       {
           source: 13,
           target: 102,
           color: "red"
       },
       {
           source: 14,
           target: 85,
           color: "blue"
       },
       {
           source: 14,
           target: 18,
           color: "blue"
       },
       {
           source: 14,
           target: 159,
           color: "orange"
       },
       {
           source: 14,
           target: 102,
           color: "black"
       },
       {
           source: 15,
           target: 160,
           color: "blue"
       },
       {
           source: 15,
           target: 89,
           color: "red"
       },
       {
           source: 15,
           target: 173,
           color: "red"
       },
       {
           source: 15,
           target: 145,
           color: "black"
       },
       {
           source: 15,
           target: 95,
           color: "red"
       },
       {
           source: 15,
           target: 117,
           color: "red"
       },
       {
           source: 15,
           target: 131,
           color: "blue"
       },
       {
           source: 16,
           target: 53,
           color: "red"
       },
       {
           source: 16,
           target: 164,
           color: "black"
       },
       {
           source: 17,
           target: 139,
           color: "red"
       },
       {
           source: 17,
           target: 183,
           color: "blue"
       },
       {
           source: 17,
           target: 107,
           color: "blue"
       },
       {
           source: 17,
           target: 172,
           color: "blue"
       },
       {
           source: 18,
           target: 85,
           color: "blue"
       },
       {
           source: 18,
           target: 102,
           color: "blue"
       },
       {
           source: 19,
           target: 121,
           color: "blue"
       },
       {
           source: 19,
           target: 92,
           color: "blue"
       },
       {
           source: 20,
           target: 139,
           color: "red"
       },
       {
           source: 20,
           target: 67,
           color: "blue"
       },
       {
           source: 20,
           target: 99,
           color: "blue"
       },
       {
           source: 20,
           target: 135,
           color: "blue"
       },
       {
           source: 21,
           target: 159,
           color: "blue"
       },
       {
           source: 21,
           target: 180,
           color: "blue"
       },
       {
           source: 21,
           target: 174,
           color: "blue"
       },
       {
           source: 22,
           target: 153,
           color: "purple"
       },
       {
           source: 22,
           target: 114,
           color: "blue"
       },
       {
           source: 22,
           target: 147,
           color: "blue"
       },
       {
           source: 22,
           target: 104,
           color: "red"
       },
       {
           source: 23,
           target: 25,
           color: "blue"
       },
       {
           source: 23,
           target: 138,
           color: "blue"
       },
       {
           source: 23,
           target: 96,
           color: "blue"
       },
       {
           source: 24,
           target: 68,
           color: "blue"
       },
       {
           source: 24,
           target: 143,
           color: "blue"
       },
       {
           source: 24,
           target: 130,
           color: "blue"
       },
       {
           source: 25,
           target: 138,
           color: "blue"
       },
       {
           source: 25,
           target: 96,
           color: "blue"
       },
       {
           source: 26,
           target: 88,
           color: "purple"
       },
       {
           source: 26,
           target: 42,
           color: "blue"
       },
       {
           source: 26,
           target: 82,
           color: "blue"
       },
       {
           source: 26,
           target: 142,
           color: "blue"
       },
       {
           source: 27,
           target: 102,
           color: "red"
       },
       {
           source: 27,
           target: 29,
           color: "blue"
       },
       {
           source: 27,
           target: 134,
           color: "red"
       },
       {
           source: 27,
           target: 30,
           color: "red"
       },
       {
           source: 27,
           target: 51,
           color: "blue"
       },
       {
           source: 28,
           target: 109,
           color: "blue"
       },
       {
           source: 28,
           target: 91,
           color: "purple"
       },
       {
           source: 29,
           target: 51,
           color: "blue"
       },
       {
           source: 30,
           target: 117,
           color: "blue"
       },
       {
           source: 30,
           target: 134,
           color: "blue"
       },
       {
           source: 30,
           target: 31,
           color: "blue"
       },
       {
           source: 31,
           target: 117,
           color: "purple"
       },
       {
           source: 31,
           target: 134,
           color: "blue"
       },
       {
           source: 31,
           target: 177,
           color: "red"
       },
       {
           source: 32,
           target: 41,
           color: "blue"
       },
       {
           source: 33,
           target: 115,
           color: "red"
       },
       {
           source: 33,
           target: 46,
           color: "blue"
       },
       {
           source: 33,
           target: 106,
           color: "blue"
       },
       {
           source: 33,
           target: 37,
           color: "blue"
       },
       {
           source: 33,
           target: 48,
           color: "blue"
       },
       {
           source: 34,
           target: 110,
           color: "blue"
       },
       {
           source: 34,
           target: 161,
           color: "blue"
       },
       {
           source: 34,
           target: 79,
           color: "blue"
       },
       {
           source: 35,
           target: 151,
           color: "red"
       },
       {
           source: 35,
           target: 56,
           color: "blue"
       },
       {
           source: 36,
           target: 95,
           color: "purple"
       },
       {
           source: 36,
           target: 141,
           color: "orange"
       },
       {
           source: 36,
           target: 98,
           color: "red"
       },
       {
           source: 36,
           target: 62,
           color: "orange"
       },
       {
           source: 37,
           target: 46,
           color: "blue"
       },
       {
           source: 37,
           target: 106,
           color: "blue"
       },
       {
           source: 38,
           target: 125,
           color: "blue"
       },
       {
           source: 38,
           target: 169,
           color: "blue"
       },
       {
           source: 39,
           target: 93,
           color: "purple"
       },
       {
           source: 39,
           target: 158,
           color: "red"
       },
       {
           source: 39,
           target: 176,
           color: "blue"
       },
       {
           source: 39,
           target: 62,
           color: "red"
       },
       {
           source: 40,
           target: 44,
           color: "blue"
       },
       {
           source: 40,
           target: 184,
           color: "blue"
       },
       {
           source: 40,
           target: 177,
           color: "green"
       },
       {
           source: 42,
           target: 88,
           color: "blue"
       },
       {
           source: 42,
           target: 73,
           color: "red"
       },
       {
           source: 42,
           target: 142,
           color: "purple"
       },
       {
           source: 43,
           target: 47,
           color: "blue"
       },
       {
           source: 43,
           target: 61,
           color: "blue"
       },
       {
           source: 43,
           target: 70,
           color: "blue"
       },
       {
           source: 44,
           target: 154,
           color: "red"
       },
       {
           source: 44,
           target: 184,
           color: "black"
       },
       {
           source: 44,
           target: 177,
           color: "blue"
       },
       {
           source: 45,
           target: 129,
           color: "blue"
       },
       {
           source: 46,
           target: 106,
           color: "blue"
       },
       {
           source: 47,
           target: 61,
           color: "blue"
       },
       {
           source: 47,
           target: 70,
           color: "blue"
       },
       {
           source: 48,
           target: 146,
           color: "blue"
       },
       {
           source: 48,
           target: 77,
           color: "red"
       },
       {
           source: 48,
           target: 127,
           color: "purple"
       },
       {
           source: 49,
           target: 116,
           color: "blue"
       },
       {
           source: 49,
           target: 136,
           color: "blue"
       },
       {
           source: 49,
           target: 64,
           color: "blue"
       },
       {
           source: 50,
           target: 63,
           color: "red"
       },
       {
           source: 50,
           target: 99,
           color: "red"
       },
       {
           source: 50,
           target: 145,
           color: "red"
       },
       {
           source: 50,
           target: 94,
           color: "blue"
       },
       {
           source: 50,
           target: 72,
           color: "purple"
       },
       {
           source: 50,
           target: 141,
           color: "purple"
       },
       {
           source: 52,
           target: 139,
           color: "blue"
       },
       {
           source: 52,
           target: 125,
           color: "yellow"
       },
       {
           source: 52,
           target: 165,
           color: "purple"
       },
       {
           source: 52,
           target: 152,
           color: "blue"
       },
       {
           source: 53,
           target: 130,
           color: "red"
       },
       {
           source: 53,
           target: 137,
           color: "blue"
       },
       {
           source: 53,
           target: 115,
           color: "blue"
       },
       {
           source: 53,
           target: 164,
           color: "red"
       },
       {
           source: 53,
           target: 78,
           color: "blue"
       },
       {
           source: 54,
           target: 173,
           color: "blue"
       },
       {
           source: 54,
           target: 163,
           color: "blue"
       },
       {
           source: 54,
           target: 118,
           color: "blue"
       },
       {
           source: 55,
           target: 66,
           color: "blue"
       },
       {
           source: 57,
           target: 113,
           color: "blue"
       },
       {
           source: 57,
           target: 69,
           color: "blue"
       },
       {
           source: 58,
           target: 76,
           color: "blue"
       },
       {
           source: 58,
           target: 149,
           color: "blue"
       },
       {
           source: 58,
           target: 92,
           color: "blue"
       },
       {
           source: 59,
           target: 97,
           color: "blue"
       },
       {
           source: 59,
           target: 157,
           color: "purple"
       },
       {
           source: 59,
           target: 166,
           color: "blue"
       },
       {
           source: 59,
           target: 155,
           color: "red"
       },
       {
           source: 60,
           target: 178,
           color: "blue"
       },
       {
           source: 60,
           target: 105,
           color: "blue"
       },
       {
           source: 61,
           target: 70,
           color: "blue"
       },
       {
           source: 62,
           target: 95,
           color: "red"
       },
       {
           source: 62,
           target: 158,
           color: "red"
       },
       {
           source: 62,
           target: 98,
           color: "red"
       },
       {
           source: 63,
           target: 179,
           color: "red"
       },
       {
           source: 63,
           target: 158,
           color: "blue"
       },
       {
           source: 63,
           target: 124,
           color: "blue"
       },
       {
           source: 63,
           target: 112,
           color: "blue"
       },
       {
           source: 64,
           target: 116,
           color: "blue"
       },
       {
           source: 64,
           target: 136,
           color: "blue"
       },
       {
           source: 65,
           target: 170,
           color: "blue"
       },
       {
           source: 65,
           target: 101,
           color: "blue"
       },
       {
           source: 67,
           target: 99,
           color: "blue"
       },
       {
           source: 67,
           target: 135,
           color: "blue"
       },
       {
           source: 68,
           target: 130,
           color: "yellow"
       },
       {
           source: 68,
           target: 143,
           color: "yellow"
       },
       {
           source: 69,
           target: 113,
           color: "blue"
       },
       {
           source: 70,
           target: 105,
           color: "red"
       },
       {
           source: 71,
           target: 144,
           color: "black"
       },
       {
           source: 72,
           target: 141,
           color: "blue"
       },
       {
           source: 72,
           target: 94,
           color: "blue"
       },
       {
           source: 73,
           target: 100,
           color: "blue"
       },
       {
           source: 73,
           target: 142,
           color: "red"
       },
       {
           source: 73,
           target: 150,
           color: "blue"
       },
       {
           source: 73,
           target: 151,
           color: "blue"
       },
       {
           source: 74,
           target: 154,
           color: "blue"
       },
       {
           source: 74,
           target: 87,
           color: "blue"
       },
       {
           source: 74,
           target: 175,
           color: "red"
       },
       {
           source: 75,
           target: 126,
           color: "blue"
       },
       {
           source: 76,
           target: 149,
           color: "blue"
       },
       {
           source: 77,
           target: 108,
           color: "blue"
       },
       {
           source: 77,
           target: 84,
           color: "blue"
       },
       {
           source: 77,
           target: 132,
           color: "black"
       },
       {
           source: 78,
           target: 115,
           color: "blue"
       },
       {
           source: 78,
           target: 137,
           color: "blue"
       },
       {
           source: 79,
           target: 110,
           color: "blue"
       },
       {
           source: 79,
           target: 161,
           color: "blue"
       },
       {
           source: 80,
           target: 86,
           color: "blue"
       },
       {
           source: 82,
           target: 111,
           color: "blue"
       },
       {
           source: 83,
           target: 140,
           color: "blue"
       },
       {
           source: 84,
           target: 108,
           color: "purple"
       },
       {
           source: 84,
           target: 132,
           color: "blue"
       },
       {
           source: 85,
           target: 102,
           color: "blue"
       },
       {
           source: 87,
           target: 97,
           color: "red"
       },
       {
           source: 87,
           target: 154,
           color: "blue"
       },
       {
           source: 88,
           target: 142,
           color: "blue"
       },
       {
           source: 89,
           target: 95,
           color: "red"
       },
       {
           source: 89,
           target: 134,
           color: "red"
       },
       {
           source: 89,
           target: 103,
           color: "blue"
       },
       {
           source: 90,
           target: 91,
           color: "red"
       },
       {
           source: 90,
           target: 175,
           color: "blue"
       },
       {
           source: 91,
           target: 109,
           color: "blue"
       },
       {
           source: 92,
           target: 121,
           color: "blue"
       },
       {
           source: 92,
           target: 96,
           color: "orange"
       },
       {
           source: 93,
           target: 176,
           color: "blue"
       },
       {
           source: 94,
           target: 141,
           color: "blue"
       },
       {
           source: 95,
           target: 98,
           color: "red"
       },
       {
           source: 95,
           target: 152,
           color: "red"
       },
       {
           source: 96,
           target: 138,
           color: "blue"
       },
       {
           source: 96,
           target: 112,
           color: "red"
       },
       {
           source: 97,
           target: 157,
           color: "purple"
       },
       {
           source: 97,
           target: 166,
           color: "blue"
       },
       {
           source: 98,
           target: 133,
           color: "blue"
       },
       {
           source: 99,
           target: 135,
           color: "blue"
       },
       {
           source: 99,
           target: 130,
           color: "red"
       },
       {
           source: 99,
           target: 127,
           color: "red"
       },
       {
           source: 99,
           target: 146,
           color: "red"
       },
       {
           source: 100,
           target: 151,
           color: "blue"
       },
       {
           source: 100,
           target: 150,
           color: "blue"
       },
       {
           source: 101,
           target: 170,
           color: "blue"
       },
       {
           source: 101,
           target: 159,
           color: "orange"
       },
       {
           source: 101,
           target: 102,
           color: "red"
       },
       {
           source: 102,
           target: 159,
           color: "orange"
       },
       {
           source: 103,
           target: 106,
           color: "red"
       },
       {
           source: 104,
           target: 155,
           color: "blue"
       },
       {
           source: 104,
           target: 162,
           color: "blue"
       },
       {
           source: 104,
           target: 167,
           color: "blue"
       },
       {
           source: 105,
           target: 178,
           color: "blue"
       },
       {
           source: 107,
           target: 183,
           color: "blue"
       },
       {
           source: 107,
           target: 172,
           color: "blue"
       },
       {
           source: 108,
           target: 132,
           color: "blue"
       },
       {
           source: 110,
           target: 161,
           color: "blue"
       },
       {
           source: 112,
           target: 158,
           color: "blue"
       },
       {
           source: 112,
           target: 185,
           color: "red"
       },
       {
           source: 112,
           target: 124,
           color: "blue"
       },
       {
           source: 114,
           target: 153,
           color: "blue"
       },
       {
           source: 114,
           target: 147,
           color: "black"
       },
       {
           source: 115,
           target: 137,
           color: "blue"
       },
       {
           source: 116,
           target: 136,
           color: "blue"
       },
       {
           source: 117,
           target: 134,
           color: "blue"
       },
       {
           source: 117,
           target: 143,
           color: "red"
       },
       {
           source: 117,
           target: 174,
           color: "red"
       },
       {
           source: 117,
           target: 177,
           color: "red"
       },
       {
           source: 117,
           target: 118,
           color: "red"
       },
       {
           source: 117,
           target: 121,
           color: "red"
       },
       {
           source: 118,
           target: 163,
           color: "blue"
       },
       {
           source: 118,
           target: 173,
           color: "blue"
       },
       {
           source: 119,
           target: 168,
           color: "blue"
       },
       {
           source: 119,
           target: 181,
           color: "blue"
       },
       {
           source: 120,
           target: 156,
           color: "blue"
       },
       {
           source: 120,
           target: 185,
           color: "blue"
       },
       {
           source: 122,
           target: 182,
           color: "blue"
       },
       {
           source: 122,
           target: 171,
           color: "blue"
       },
       {
           source: 123,
           target: 179,
           color: "purple"
       },
       {
           source: 123,
           target: 148,
           color: "blue"
       },
       {
           source: 124,
           target: 158,
           color: "blue"
       },
       {
           source: 125,
           target: 169,
           color: "purple"
       },
       {
           source: 127,
           target: 146,
           color: "black"
       },
       {
           source: 129,
           target: 168,
           color: "red"
       },
       {
           source: 130,
           target: 143,
           color: "blue"
       },
       {
           source: 131,
           target: 160,
           color: "blue"
       },
       {
           source: 131,
           target: 145,
           color: "blue"
       },
       {
           source: 133,
           target: 154,
           color: "red"
       },
       {
           source: 139,
           target: 165,
           color: "blue"
       },
       {
           source: 139,
           target: 152,
           color: "purple"
       },
       {
           source: 143,
           target: 163,
           color: "red"
       },
       {
           source: 145,
           target: 160,
           color: "blue"
       },
       {
           source: 147,
           target: 153,
           color: "blue"
       },
       {
           source: 148,
           target: 179,
           color: "blue"
       },
       {
           source: 150,
           target: 151,
           color: "blue"
       },
       {
           source: 152,
           target: 156,
           color: "red"
       },
       {
           source: 152,
           target: 165,
           color: "green"
       },
       {
           source: 155,
           target: 162,
           color: "blue"
       },
       {
           source: 155,
           target: 167,
           color: "blue"
       },
       {
           source: 156,
           target: 185,
           color: "blue"
       },
       {
           source: 157,
           target: 166,
           color: "blue"
       },
       {
           source: 159,
           target: 174,
           color: "blue"
       },
       {
           source: 159,
           target: 180,
           color: "blue"
       },
       {
           source: 162,
           target: 167,
           color: "blue"
       },
       {
           source: 163,
           target: 173,
           color: "blue"
       },
       {
           source: 165,
           target: 169,
           color: "yellow"
       },
       {
           source: 168,
           target: 181,
           color: "blue"
       },
       {
           source: 171,
           target: 182,
           color: "blue"
       },
       {
           source: 172,
           target: 183,
           color: "blue"
       },
       {
           source: 174,
           target: 180,
           color: "blue"
       },
   ],
   nodes: [
       {
           id: 1,
       },
       {
           id: 2,
       },
       {
           id: 3,
       },
       {
           id: 4,
       },
       {
           id: 5,
       },
       {
           id: 6,
       },
       {
           id: 7,
       },
       {
           id: 8,
       },
       {
           id: 9,
       },
       {
           id: 10,
       },
       {
           id: 11,
       },
       {
           id: 12,
       },
       {
           id: 13,
       },
       {
           id: 14,
       },
       {
           id: 15,
       },
       {
           id: 16,
       },
       {
           id: 17,
       },
       {
           id: 18,
       },
       {
           id: 19,
       },
       {
           id: 20,
       },
       {
           id: 21,
       },
       {
           id: 22,
       },
       {
           id: 23,
       },
       {
           id: 24,
       },
       {
           id: 25,
       },
       {
           id: 26,
       },
       {
           id: 27,
       },
       {
           id: 28,
       },
       {
           id: 29,
       },
       {
           id: 30,
       },
       {
           id: 31,
       },
       {
           id: 32,
       },
       {
           id: 33,
       },
       {
           id: 34,
       },
       {
           id: 35,
       },
       {
           id: 36,
       },
       {
           id: 37,
       },
       {
           id: 38,
       },
       {
           id: 39,
       },
       {
           id: 40,
       },
       {
           id: 41,
       },
       {
           id: 42,
       },
       {
           id: 43,
       },
       {
           id: 44,
       },
       {
           id: 45,
       },
       {
           id: 46,
       },
       {
           id: 47,
       },
       {
           id: 48,
       },
       {
           id: 49,
       },
       {
           id: 50,
       },
       {
           id: 51,
       },
       {
           id: 52,
       },
       {
           id: 53,
       },
       {
           id: 54,
       },
       {
           id: 55,
       },
       {
           id: 56,
       },
       {
           id: 57,
       },
       {
           id: 58,
       },
       {
           id: 59,
       },
       {
           id: 60,
       },
       {
           id: 61,
       },
       {
           id: 62,
       },
       {
           id: 63,
       },
       {
           id: 64,
       },
       {
           id: 65,
       },
       {
           id: 66,
       },
       {
           id: 67,
       },
       {
           id: 68,
       },
       {
           id: 69,
       },
       {
           id: 70,
       },
       {
           id: 71,
       },
       {
           id: 72,
       },
       {
           id: 73,
       },
       {
           id: 74,
       },
       {
           id: 75,
       },
       {
           id: 76,
       },
       {
           id: 77,
       },
       {
           id: 78,
       },
       {
           id: 79,
       },
       {
           id: 80,
       },
       {
           id: 81,
       },
       {
           id: 82,
       },
       {
           id: 83,
       },
       {
           id: 84,
       },
       {
           id: 85,
       },
       {
           id: 86,
       },
       {
           id: 87,
       },
       {
           id: 88,
       },
       {
           id: 89,
       },
       {
           id: 90,
       },
       {
           id: 91,
       },
       {
           id: 92,
       },
       {
           id: 93,
       },
       {
           id: 94,
       },
       {
           id: 95,
       },
       {
           id: 96,
       },
       {
           id: 97,
       },
       {
           id: 98,
       },
       {
           id: 99,
       },
       {
           id: 100,
       },
       {
           id: 101,
       },
       {
           id: 102,
       },
       {
           id: 103,
       },
       {
           id: 104,
       },
       {
           id: 105,
       },
       {
           id: 106,
       },
       {
           id: 107,
       },
       {
           id: 108,
       },
       {
           id: 109,
       },
       {
           id: 110,
       },
       {
           id: 111,
       },
       {
           id: 112,
       },
       {
           id: 113,
       },
       {
           id: 114,
       },
       {
           id: 115,
       },
       {
           id: 116,
       },
       {
           id: 117,
       },
       {
           id: 118,
       },
       {
           id: 119,
       },
       {
           id: 120,
       },
       {
           id: 121,
       },
       {
           id: 122,
       },
       {
           id: 123,
       },
       {
           id: 124,
       },
       {
           id: 125,
       },
       {
           id: 126,
       },
       {
           id: 127,
       },
       {
           id: 128,
       },
       {
           id: 129,
       },
       {
           id: 130,
       },
       {
           id: 131,
       },
       {
           id: 132,
       },
       {
           id: 133,
       },
       {
           id: 134,
       },
       {
           id: 135,
       },
       {
           id: 136,
       },
       {
           id: 137,
       },
       {
           id: 138,
       },
       {
           id: 139,
       },
       {
           id: 140,
       },
       {
           id: 141,
       },
       {
           id: 142,
       },
       {
           id: 143,
       },
       {
           id: 144,
       },
       {
           id: 145,
       },
       {
           id: 146,
       },
       {
           id: 147,
       },
       {
           id: 148,
       },
       {
           id: 149,
       },
       {
           id: 150,
       },
       {
           id: 151,
       },
       {
           id: 152,
       },
       {
           id: 153,
       },
       {
           id: 154,
       },
       {
           id: 155,
       },
       {
           id: 156,
       },
       {
           id: 157,
       },
       {
           id: 158,
       },
       {
           id: 159,
       },
       {
           id: 160,
       },
       {
           id: 161,
       },
       {
           id: 162,
       },
       {
           id: 163,
       },
       {
           id: 164,
       },
       {
           id: 165,
       },
       {
           id: 166,
       },
       {
           id: 167,
       },
       {
           id: 168,
       },
       {
           id: 169,
       },
       {
           id: 170,
       },
       {
           id: 171,
       },
       {
           id: 172,
       },
       {
           id: 173,
       },
       {
           id: 174,
       },
       {
           id: 175,
       },
       {
           id: 176,
       },
       {
           id: 177,
       },
       {
           id: 178,
       },
       {
           id: 179,
       },
       {
           id: 180,
       },
       {
           id: 181,
       },
       {
           id: 182,
       },
       {
           id: 183,
       },
       {
           id: 184,
       },
       {
           id: 185,
       },
   ],

  };

  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 120,
      highlightStrokeColor: "red",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Networks</h1>
        <Graph
          id="graph-id"
          data={data}
          config={myConfig}
        />
      </header>
    </div>
  );
}

export default App;
