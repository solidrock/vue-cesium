/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
define(['./when-8d13db60', './Check-70bec281', './Math-61ede240', './Cartographic-fe4be337', './Cartesian2-85064f09', './BoundingSphere-775c5788', './Cartesian4-5af5bb24', './RuntimeError-ba10bc3e', './WebGLConstants-4c11ee5f', './ComponentDatatype-5862616f', './GeometryAttribute-91704ebb', './PrimitiveType-97893bc7', './FeatureDetection-7bd32c34', './Transforms-b2e71640', './buildModuleUrl-14bfe498', './GeometryAttributes-aacecde6', './GeometryOffsetAttribute-ca302482', './VertexFormat-fe4db402', './BoxGeometry-5e34d1dc'], function (when, Check, _Math, Cartographic, Cartesian2, BoundingSphere, Cartesian4, RuntimeError, WebGLConstants, ComponentDatatype, GeometryAttribute, PrimitiveType, FeatureDetection, Transforms, buildModuleUrl, GeometryAttributes, GeometryOffsetAttribute, VertexFormat, BoxGeometry) { 'use strict';

    function createBoxGeometry(boxGeometry, offset) {
        if (when.defined(offset)) {
            boxGeometry = BoxGeometry.BoxGeometry.unpack(boxGeometry, offset);
        }
        return BoxGeometry.BoxGeometry.createGeometry(boxGeometry);
    }

    return createBoxGeometry;

});
