$output = & "npx" "vite" 2>&1
$output | Out-File -FilePath "d:\work\test\ymx\ID-generator\output.txt" -Encoding utf8
Write-Output "Done"