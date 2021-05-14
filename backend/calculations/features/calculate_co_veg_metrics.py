
#  Functions to add metrics of soil and vegetation co2

from pathlib import Path
import os
import gdal
import json
import numpy as np

# needed files
# soil_co2_estimate for europe

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

def random_veg_estimates(aoi_poly)-> list:
    """returns a list with a random number for each polygon in aoi_poly"""
    veg_estimates = []
    for _ in aoi_poly["coordinates"]:
        veg_estimates.append( np.random.randint(10))
    return veg_estimates



def main(aoi_poly)->json:
    """gets a json file (subdivided into polygons) and adds
    a property "veg_co_estimates" with estimates from soil"""

    check_input(aoi_poly)
    veg_est = random_veg_estimates(aoi_poly)
    aoi_poly["veg_co_estimates"]= veg_est
    return aoi_poly


if __name__ == '__main__':
    import os

    aoi_path = Path("..", "..", "..", "data", "test_data", "aoi_ita_subdiv.geojson")
    with open(aoi_path, "r+") as f:
        aoi_poly = json.load(f)

    aoi_poly_with_veg_est = main(aoi_poly)






