module.exports = {
  default: {
    require: ["hooks/*.js", "step_definitions/*.js"],
    paths: ["features/*.feature"],
    // Tambahkan format json di bawah ini
    format: [
        "progress", 
        "json:reports/cucumber_report.json"
    ]
  }
}