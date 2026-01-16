module.exports = {
  default: {
    // Gunakan ./ untuk memastikan dia mencari di folder saat ini
    require: ["./step_definitions/*.js", "./hooks/*.js"],
    paths: ["./features/*.feature"],
    format: ["progress", "summary", "json:./reports/cucumber_report.json"]
  }
}