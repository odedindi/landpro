# -*- coding: utf-8 -*-
"""Unit tests for the functions  to retrieve & preprocess and data"""

import unittest
from pathlib import Path
import json
from backend.calculations.data import retrieve_dataset
TEST_JSON_PATH = Path("..", "..","data", "test_data", "aoi_ita.geojson")
RAW_DATA_PATH = Path("..", "..","data", "raw")

class Test_q_data(unittest.TestCase):

    def test_retrieve_data(self):
        ds = retrieve_dataset(TEST_JSON_PATH, RAW_DATA_PATH, mode="ndvi")
        print(ds)
        output_path = RAW_DATA_PATH / ( str(ds) + f"_0_ndvi.zip")
        self.assertTrue(output_path.exists())
        #TODO implement this test
        pass
    def test_calc_soil_co2(self):
        # TODO implement this test
        pass
    def calc_co_soil_metric(self):
        # TODO implement this test
        pass

if __name__ == '__main__':
    unittest.main()



