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

def load_as_polygon_shapely(aoi_json: dict)->shape:
    """load the geojson as polygon and outputs the polygon as SHAPELY object
    Params:
    aoi_json: str or PosixPath to json file
    Returns:
        ogr object /vector polygon
    """
    #TODO: implement for multiple polygons
    coords_list = aoi_json['features'][0]['geometry']
    return shape(coords_list)

## test function to split
def naive_split(aoi_poly):
    """splits in 4 using centre to make a pseudo landcover subdividion"""
    print("WARNING: this split doesn't actually make sense!!")
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
    return MultiPolygon(new_poly_ls)

#TODO: this yields a string when it should yield a dict
def poly_to_geojson(sub_aoi_poly):
    """transforms the polygon(subdivided) into a json"""
    return json.dumps(mapping(sub_aoi_poly))

def main(aoi_json: dict)->str:
    """main function to split the area of interest in multiple polygons:
     Params:
     aoi_json: str or PosixPath"""
    aoi_poly = load_as_polygon_shapely(aoi_json)
    # TODO: implement actual splitting
    sub_aoi_poly = naive_split(aoi_poly)
    return poly_to_geojson(sub_aoi_poly)

if __name__ == '__main__':
    import os

    aoi_path = Path("..", "..", "..","data", "test_data", "aoi_ita.geojson")
    with open(aoi_path) as f:
        aoi_json = json.load(f)
    sub_poly = main(aoi_json)
    print(sub_poly)
    fin_path = aoi_path.parent / "aoi_ita_subdiv.geojson"

    with open(fin_path, "x+") as f:
        f.write(str(sub_poly))