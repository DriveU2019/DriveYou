##
# Copyright 2019 [dage] @DriveYou
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
##

##
# --------------------------------------------------------------------------------
# Description:
#        TODO:
# --------------------------------------------------------------------------------
##

FROM driveu/centos-nginx:1.0.0

ARG CREATED_DATE=not-set
ARG SOURCE_COMMIT=not-set

LABEL org.opencontainers.image.authors=driveu@gmail.com
LABEL org.opencontainers.image.created=$CREATED_DATE
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT
LABEL org.opencontainers.image.title="driveU-app"
LABEL org.opencontainers.image.url=https://hub.docker.com/r/driveu/driveu-app
LABEL org.opencontainers.image.licenses=Apache2.0
LABEL com.davedb.nginxversion=$NGINX_VERSION

WORKDIR /usr/share/nginx/app

EXPOSE 3100

COPY ./build /usr/share/nginx/app

COPY  ./nginx.conf /etc/nginx/conf.d/

CMD ["nginx", "-g", "daemon off;"]