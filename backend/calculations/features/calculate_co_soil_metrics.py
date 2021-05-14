
#  Functions to add metrics of soil and vegetation co2

import numpy as np
import geopandas as gpd
import matplotlib.pyplot as plt
import os
import rasterio
from rasterio import plot
from rasterio.plot import show
from rasterio.mask import mask
import os
import gdal
import json
from pathlib import Path

# needed files
# soil_co2_estimate for europe



def calc_soil_co_metric(aoi):
    """calculates the soil co2 metric using soc_europe map and the given subpolygones
    aoi is a json file with multiple polygones
    returns updated aoi with co2 estimates for each polygone as attributes
    """
    src = rasterio.open('soc_europe_250m.tif')
    gdf = gpd.read_file(aoi)

    soc_array = np.zeros(len(gdf['geometry']))

    for i in range(len(gdf['geometry'])):
        masked, mask_transform = mask(dataset=src, shapes=gdf.geometry[i], crop=True)
        profile = src.meta
        WIDTH = masked.shape[2]  ## get the dimensions of the image we are writting out
        HEIGHT = masked.shape[1]
        profile.update(driver='GTiff', transform=mask_transform, height=HEIGHT, width=WIDTH)
        print(profile)  ## check on the updated profile
        with rasterio.open('clip.tif', 'w', **profile) as dst:
            dst.write(masked)
        g_image = gdal.Open('clip.tif')
        a_image = g_image.ReadAsArray()
        a_image.mean()
        soc_array[i] = a_image.mean()

    print(soc_array)
    gdf['soc_metrics'] = soc_array

def check_input(aoi_poly) -> None:
    """check the input json file, raise error if:
    file doesn't exist
    file doesn't have coordinates
    Params:
    aoi:
    Returns: None    """
    if not isinstance(aoi_poly, dict):
        raise ValueError(f"input  should be a str or json instead is {type(aoi_poly)}")
    #TODO: add check for coordinates

def random_soil_estimates(aoi_poly)-> list:
    """returns a list with a random number for each polygon in aoi_poly"""
    veg_estimates = []
    for _ in aoi_poly["coordinates"]:
        veg_estimates.append( np.random.randint(10))
    return veg_estimates



def main(aoi_poly)->json:
    """gets a json file (subdivided into polygons) and adds
    a property "soil_co_estimates" with estimates from soil"""

    check_input(aoi_poly)
    soil_est = random_soil_estimates(aoi_poly)
    aoi_poly["soil_co_estimates"]= soil_est
    return aoi_poly

if __name__ == '__main__':
    aoi_path = Path("..", "..", "..", "data", "test_data", "aoi_ita_subdiv.geojson")
    with open(aoi_path, "r+") as f:
        aoi_poly = json.load(f)

    aoi_poly_with_soil_est = main(aoi_poly)
    print(aoi_poly_with_soil_est)