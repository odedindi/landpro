#  """ complete function that downloads fdata, preprocess them and runs models.predict_model.py"""

import sys

sys.path.append("..")
import data
import os
from models import predict_model
# from models import calc_vegetation_co_metric, calc_soil_co_metric
from pathlib import Path
import pathlib

DATA_PARENT_PATH = Path("..", "..", "data", "raw")


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


# TODO: make this function work
def predict_main(aoi_path):
    """this functions takes as input the json file from frontend and returns the subpolygones with co2 metrics
    aoi_path: str - json file with area of interest from frontend
    """
    check_input(aoi_path)
    # download images from gee
    data_parent_path = Path("..", "data", "raw")
    dataset_name = data.retrieve_dataset(aoi_path, data_parent_path=DATA_PARENT_PATH,
                                         mode=['global_land_cover', 'ndvi'])

    # preprocess data (creates dataset folder structure in data/preprocessed
    data.make_dataset(dataset_name)

    # predict land cover
    # prediction = predict_model(dataset_name)
    # prediction is a json with subpolygones

    # get co2 estimations
    # prediction = calc_vegetation_co_metric(prediction)  # adds attribute "veg_co2_metric" to predictions
    # prediction = calc_soil_co_metric(prediction)  # adds attribute "soil_co2_metric" to predictions
    # return prediction
    pass


if __name__ == '__main__':
    import os

    aoi_path = Path("..", "..", "data", "test_data", "aoi_ita.geojson")
    print(type(aoi_path))
    predict_main(aoi_path)
