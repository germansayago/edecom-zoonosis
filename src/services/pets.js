import axios from 'axios'

const baseUrl = 'https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=1Qw85phKJHXxd5ue1PYUcbjZ1uoqZjCpEW-wai0qmLKg&sheet=mascotas'

export default axios.create({
  baseUrl
})