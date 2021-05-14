"""This module deals with splitting
the area of interest in multiple polygons based on landcover,
time series or other criteria"""

from osgeo import ogr
import pathlib
from pathlib import Path
import os
import json
from shapely.geometry import shape, LineString, mapping, MultiPolygon
from shapely.ops import split
import matplotlib.pyplot as plt


def check_input(aoi_path) -> None:
    """check the input json file, raise error if:
    file doesn't exist
    file doesn't have coordinates
    Params:
    aoi_path: str or posixPath - path to json file
    Returns: None    """
    if not isinstance(aoi_path, (pathlib.PosixPath, str)):
        raise ValueError(f"input {aoi_path} should be a str nor posixPath")
    if not os.path.exists(aoi_path):
        raise FileNotFoundError(f"couldn't find json file at {aoi_path}")
    if not str(aoi_path).upper().endswith("JSON"):
        raise TypeError(f"{aoi_path} should be a JSON/GEOJSON file")

# TODO: remove?
def load_as_polygon(aoi_path):
    """load the geojson as polygon and outputs the polygon as ogr object
    Params:
    aoi_path: str or PosixPath to json file
    Returns:
        ogr object /vector polygon
    """
    with open(aoi_path) as f:
        coords = json.load(f)
    #TODO: implement for multiple polygons
    coords_list = coords['features'][0]['geometry']
    g = ogr.CreateGeometryFromJson(str(coords_list))
    return g

def load_as_polygon_shapely(aoi_path):
    """load the geojson as polygon and outputs the polygon as SHAPELY object
    Params:
    aoi_path: str or PosixPath to json file
    Returns:
        ogr object /vector polygon
    """
    with open(aoi_path) as f:
        coords = json.load(f)
    #TODO: implement for multiple polygons
    coords_list = coords['features'][0]['geometry']
    #change single quotes to double quotes around prorperty names
    coords_list = coords_list
    g = shape(coords_list)
    return g

## test function to split
def naive_split(aoi_poly):
    """splits in 4 using centre to make a pseudo landcover subdividion"""
    print("WARNING: this split doesn't actually make sense!!")
    #TODO: under
    minX, minY, maxX, maxY = aoi_poly.bounds
    # creating two lines to split in the centre
    # get coordinates
    v_line_coords = [[ minX + .5*(maxX-minX), maxY ], [ minX + .5*(maxX-minX), minY ]]
    h_line_coords = [[ minX , minY + .5*(maxY-minY) ], [ maxX , minY + .5*(maxY-minY) ]]
    # create lines
    v_line = LineString(v_line_coords)
    h_line = LineString(h_line_coords)

    new_poly = split(aoi_poly,v_line)
    new_poly_ls = []
    for i in new_poly:
        new_i=split(i, h_line)
        new_poly_ls += new_i
    new_poly2 = MultiPolygon(new_poly_ls)
    return new_poly2

def poly_to_geojson(sub_aoi_poly):
    """transforms the polygon(subdivided) into a json"""
    return json.dumps(mapping(sub_aoi_poly))

def main(aoi_path):
    """main function to split the area of interest in multiple polygons """
    check_input(aoi_path)
    aoi_poly = load_as_polygon_shapely(aoi_path)
    # TODO: implement actual splitting
    sub_aoi_poly = naive_split(aoi_poly)
    return poly_to_geojson(sub_aoi_poly)

if __name__ == '__main__':
    import os

    aoi_path = Path("..", "..", "..","data", "test_data", "aoi_ita.geojson")
    sub_poly = main(aoi_path)
    print(sub_poly)