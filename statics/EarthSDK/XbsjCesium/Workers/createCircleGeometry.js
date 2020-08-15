define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-72f33550","./Transforms-12e4beec","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-454922e8","./GeometryAttributes-90846c5f","./AttributeCompression-64a3d9e4","./GeometryPipeline-583717f2","./EncodedCartesian3-43a68c70","./IndexDatatype-66caba23","./IntersectionTests-27cc5733","./Plane-bbcdf4b1","./GeometryOffsetAttribute-84f7eff3","./VertexFormat-cc24f342","./EllipseGeometryLibrary-3584f66e","./GeometryInstance-327b303b","./EllipseGeometry-dedb1449"],function(o,e,t,n,i,r,a,s,l,d,m,c,u,p,y,_,h,G,x,f,g){"use strict";function v(e){var t=(e=o.defaultValue(e,o.defaultValue.EMPTY_OBJECT)).radius,i={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new g.EllipseGeometry(i),this._workerName="createCircleGeometry"}v.packedLength=g.EllipseGeometry.packedLength,v.pack=function(e,t,i){return g.EllipseGeometry.pack(e._ellipseGeometry,t,i)};var E=new g.EllipseGeometry({center:new n.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),b={center:new n.Cartesian3,radius:void 0,ellipsoid:n.Ellipsoid.clone(n.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new G.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return v.unpack=function(e,t,i){var r=g.EllipseGeometry.unpack(e,t,E);return b.center=n.Cartesian3.clone(r._center,b.center),b.ellipsoid=n.Ellipsoid.clone(r._ellipsoid,b.ellipsoid),b.height=r._height,b.extrudedHeight=r._extrudedHeight,b.granularity=r._granularity,b.vertexFormat=G.VertexFormat.clone(r._vertexFormat,b.vertexFormat),b.stRotation=r._stRotation,b.shadowVolume=r._shadowVolume,o.defined(i)?(b.semiMajorAxis=r._semiMajorAxis,b.semiMinorAxis=r._semiMinorAxis,i._ellipseGeometry=new g.EllipseGeometry(b),i):(b.radius=r._semiMajorAxis,new v(b))},v.createGeometry=function(e){return g.EllipseGeometry.createGeometry(e._ellipseGeometry)},v.createShadowVolume=function(e,t,i){var r=e._ellipseGeometry._granularity,o=e._ellipseGeometry._ellipsoid,n=t(r,o),a=i(r,o);return new v({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:o,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:n,height:a,vertexFormat:G.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(v.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(e,t){return o.defined(t)&&(e=v.unpack(e,t)),e._ellipseGeometry._center=n.Cartesian3.clone(e._ellipseGeometry._center),e._ellipseGeometry._ellipsoid=n.Ellipsoid.clone(e._ellipseGeometry._ellipsoid),v.createGeometry(e)}});