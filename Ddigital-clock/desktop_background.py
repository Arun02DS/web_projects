import ctypes

def set_desktop_background(html_file_path):
    SPI_SETDESKWALLPAPER = 20
    ctypes.windll.user32.SystemParametersInfoW(SPI_SETDESKWALLPAPER, 0, html_file_path, 3)

html_file_path = r"C:\Users\ArunSinghNegi\Documents\wapro\Ddigital-clock\index.html"
set_desktop_background(html_file_path)