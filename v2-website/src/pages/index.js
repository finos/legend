/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function Brand() {
  return (
    <article class="home-page__content__brand">
      <div class="home-page__content__container">
        {/* <!-- NOTE: we hack the view box here to show the border properly, else the outer strokes of D and L got trimmed --> */}
        <svg
          class="home-page__logo home-page__logo__svg"
          width="100%"
          height="100%"
          viewBox="-3 0 725 209.1"
        >
          <g>
            {/* <!-- L --> */}
            <path
              class="main-logo main-logo-st0"
              d="M205,170.7l-52.3-31.6c-2.7-1.7-5-0.4-5,2.8v16l-91.9,0V59.4h11.4c3.2,0,4.5-2.2,2.8-5L38.4,2.1
c-1.7-2.7-4.3-2.7-6,0L0.7,54.4c-1.7,2.7-0.4,5,2.8,5h12.1v126.1c0,3,2.4,5.4,5.4,5.4h126.7v14.8c0,3.2,2.2,4.4,5,2.8l52.3-31.7
C207.7,175.1,207.7,172.4,205,170.7L205,170.7z"
            />
            {/* <!-- E --> */}
            <path
              class="main-logo main-logo-st1"
              d="M141.9,86.5V68.1c0-1.6-1.2-2.9-2.8-2.9H66.5c-1.6,0-2.8,1.3-2.8,2.9v18.4c0,1.6,1.2,2.9,2.8,2.9h72.6
C140.7,89.4,141.9,88.1,141.9,86.5L141.9,86.5z"
            />
            <path
              class="main-logo main-logo-st1"
              d="M118.4,116.9V98.5c0-1.6-0.9-2.9-2-2.9H65.7c-1.1,0-2,1.3-2,2.9v18.4c0,1.6,0.9,2.9,2,2.9h50.8
C117.6,119.8,118.4,118.6,118.4,116.9L118.4,116.9z"
            />
            <path
              class="main-logo main-logo-st1"
              d="M141.9,147.3V129c0-1.7-1.2-2.9-2.8-2.9H66.5c-1.6,0-2.8,1.3-2.8,2.9v18.4c0,1.6,1.2,2.9,2.8,2.9h72.6
C140.7,150.3,141.9,149,141.9,147.3L141.9,147.3z"
            />
            {/* <!-- G --> */}
            <path
              class="main-logo main-logo-st2"
              d="M243.7,137.6h25.1c-5.4,11.6-17.6,17-31.4,17c-21.5,0-36.9-17.4-36.9-39.7c0-22.3,15.5-39.7,36.9-39.7
c13.1,0,23.2,2.1,33.3,14.2c0.9,1.1,2.8,2.8,5.4,2.8c7.5,0,30.3,0,33.7,0c3.2,0,4.5-3,3.2-5.8c-17-34.8-38.4-49.2-75.6-49.2
c-43.8,0-80.5,34.8-80.5,77.7c0,6.5,0.9,12.9,2.5,18.9l55.7,36.8c2.7,1.8,2.7,4.6,0,6.4l-12.1,8c10.5,4.9,22.1,7.7,34.4,7.7
c17.6,0,31.6-6.2,42.3-15.5v7.5c0,3,2.4,5.4,5.4,5.4h24.3c3,0,5.4-2.4,5.4-5.4c0-71.9,0-71.9,0-71.9c0-3-2.4-5.4-5.4-5.4h-65.7
c-2.8,0-5.2,2.4-5.2,5.4v19.5C238.5,135.2,240.9,137.6,243.7,137.6L243.7,137.6z"
            />
            {/* <!-- E --> */}
            <path
              class="main-logo main-logo-st3"
              d="M424.5,153.1h-59.9v-19.8h48.1c2.8,0,5.4-2.4,5.4-5.4v-26.2c0-3-2.6-5.4-5.4-5.4h-48.1V76.6h59.3
c2.8,0,5.4-2.4,5.4-5.4V45c0-3-2.6-5.4-5.4-5.4h-98.1c-3,0-5.4,2.4-5.4,5.4v139.6c0,3,2.4,5.4,5.4,5.4h98.8c3,0,5.4-2.4,5.4-5.4
v-26.2C429.9,155.4,427.5,153.1,424.5,153.1L424.5,153.1z"
            />
            {/* <!-- N --> */}
            <path
              class="main-logo main-logo-st4"
              d="M562.8,190c3,0,5.4-2.4,5.4-5.4V45c0-3-2.4-5.4-5.4-5.4h-33.5c-3,0-5.4,2.4-5.4,5.4v71.1
c0,0-41.9-62.7-46.4-68.7c-4.5-6-6.9-7.7-12-7.7h-23.2h-1.5c-2.8,0-5.4,2.4-5.4,5.4v139.6c0,3,2.4,5.4,5.4,5.4h33.7
c2.8,0,5.4-2.4,5.4-5.4v-72.4l48.1,72.4c2.4,3.4,4.7,5.4,11,5.4C540.7,190,562.8,190,562.8,190L562.8,190z"
            />
            {/* <!-- D --> */}
            <path
              class="main-logo main-logo-st5"
              d="M633.8,39.7c-0.6,0-54.1,0-54.1,0c-3,0-5.3,2.4-5.3,5.4v139.6c0,3,2.3,5.4,5.3,5.4c0,0,35.1,0,52.4,0
c52.8,0,87.9-27.7,87.9-75.4C720,80.3,702.2,39.7,633.8,39.7L633.8,39.7z M637.1,153.1c-2.5,0-11.4,0-19.2,0V76.6c7,0,15,0,19.2,0
c29,0,38.7,19.8,38.7,38.4C675.8,135.7,664.2,153.1,637.1,153.1L637.1,153.1z"
            />
          </g>
        </svg>
        <div class="home-page__down-arrow__container">
          <svg class="home-page__down-arrow" viewBox="0 0 960 560">
            <g>
              <path
                d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
  c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
  c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"
              />
            </g>
          </svg>
        </div>
      </div>
    </article>
  );
}

function WhatIsLegend() {
  return (
    <article class="home-page__content__whatis">
      <div class="home-page__content__container">
        <div class="home-page__content__whatis__title">
          <div class="home-page__content__whatis__title__pre">What is</div>
          <svg
            class="home-page__content__whatis__title__logo"
            width="100%"
            height="100%"
            viewBox="0 0 720 209.1"
            style={{
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              "stroke-linejoin": "round",
              "stroke-miterlimit": "2",
            }}
          >
            <g>
              <path
                class="st0"
                d="M243.7,137.6h25.1c-5.4,11.6-17.6,17-31.4,17c-21.5,0-36.9-17.4-36.9-39.7c0-22.3,15.5-39.7,36.9-39.7
c13.1,0,23.2,2.1,33.3,14.2c0.9,1.1,2.8,2.8,5.4,2.8c7.5,0,30.3,0,33.7,0c3.2,0,4.5-3,3.2-5.8c-17-34.8-38.4-49.2-75.6-49.2
c-43.8,0-80.5,34.8-80.5,77.7c0,6.5,0.9,12.9,2.5,18.9l55.7,36.8c2.7,1.8,2.7,4.6,0,6.4l-12.1,8c10.5,4.9,22.1,7.7,34.4,7.7
c17.6,0,31.6-6.2,42.3-15.5v7.5c0,3,2.4,5.4,5.4,5.4h24.3c3,0,5.4-2.4,5.4-5.4c0-71.9,0-71.9,0-71.9c0-3-2.4-5.4-5.4-5.4h-65.7
c-2.8,0-5.2,2.4-5.2,5.4v19.5C238.5,135.2,240.9,137.6,243.7,137.6L243.7,137.6z"
              />
              <path
                class="st0"
                d="M424.5,153.1h-59.9v-19.8h48.1c2.8,0,5.4-2.4,5.4-5.4v-26.2c0-3-2.6-5.4-5.4-5.4h-48.1V76.6h59.3
c2.8,0,5.4-2.4,5.4-5.4V45c0-3-2.6-5.4-5.4-5.4h-98.1c-3,0-5.4,2.4-5.4,5.4v139.6c0,3,2.4,5.4,5.4,5.4h98.8c3,0,5.4-2.4,5.4-5.4
v-26.2C429.9,155.4,427.5,153.1,424.5,153.1L424.5,153.1z"
              />
              <path
                class="st0"
                d="M562.8,190c3,0,5.4-2.4,5.4-5.4V45c0-3-2.4-5.4-5.4-5.4h-33.5c-3,0-5.4,2.4-5.4,5.4v71.1
c0,0-41.9-62.7-46.4-68.7c-4.5-6-6.9-7.7-12-7.7h-23.2h-1.5c-2.8,0-5.4,2.4-5.4,5.4v139.6c0,3,2.4,5.4,5.4,5.4h33.7
c2.8,0,5.4-2.4,5.4-5.4v-72.4l48.1,72.4c2.4,3.4,4.7,5.4,11,5.4C540.7,190,562.8,190,562.8,190L562.8,190z"
              />
              <path
                class="st0"
                d="M633.8,39.7c-0.6,0-54.1,0-54.1,0c-3,0-5.3,2.4-5.3,5.4v139.6c0,3,2.3,5.4,5.3,5.4c0,0,35.1,0,52.4,0
c52.8,0,87.9-27.7,87.9-75.4C720,80.3,702.2,39.7,633.8,39.7L633.8,39.7z M637.1,153.1c-2.5,0-11.4,0-19.2,0V76.6c7,0,15,0,19.2,0
c29,0,38.7,19.8,38.7,38.4C675.8,135.7,664.2,153.1,637.1,153.1L637.1,153.1z"
              />
              <path
                class="st0"
                d="M141.9,86.5V68.1c0-1.6-1.2-2.9-2.8-2.9H66.5c-1.6,0-2.8,1.3-2.8,2.9v18.4c0,1.6,1.2,2.9,2.8,2.9h72.6
C140.7,89.4,141.9,88.1,141.9,86.5L141.9,86.5z"
              />
              <path
                class="st0"
                d="M118.4,116.9V98.5c0-1.6-0.9-2.9-2-2.9H65.7c-1.1,0-2,1.3-2,2.9v18.4c0,1.6,0.9,2.9,2,2.9h50.8
C117.6,119.8,118.4,118.6,118.4,116.9L118.4,116.9z"
              />
              <path
                class="st0"
                d="M141.9,147.3V129c0-1.6-1.2-2.9-2.8-2.9H66.5c-1.6,0-2.8,1.3-2.8,2.9v18.4c0,1.6,1.2,2.9,2.8,2.9h72.6
C140.7,150.3,141.9,149,141.9,147.3L141.9,147.3z"
              />
              <path
                class="st0"
                d="M205,170.7l-52.3-31.6c-2.7-1.7-5-0.4-5,2.8v16l-91.9,0V59.4h11.4c3.2,0,4.5-2.2,2.8-5L38.4,2.1
c-1.7-2.7-4.3-2.7-6,0L0.7,54.4c-1.7,2.7-0.4,5,2.8,5h12.1v126.1c0,3,2.4,5.4,5.4,5.4h126.7v14.8c0,3.2,2.2,4.4,5,2.8l52.3-31.6
C207.7,175.1,207.7,172.4,205,170.7L205,170.7z"
              />
            </g>
          </svg>
        </div>
        <section class="home-page__content__whatis__content">
          <div class="home-page__content__whatis__text">
            <b>One place to access all data!</b>
          </div>
          <ul class="home-page__content__whatis__reasons">
            <li class="home-page__content__whatis__reason">
              <b>Describe</b> and <b>connect</b> data
            </li>
            <li class="home-page__content__whatis__reason">
              <b>Find</b> meaningful data
            </li>
            <li class="home-page__content__whatis__reason">
              <b>Query</b> data with a button click
            </li>
            <li class="home-page__content__whatis__reason">
              <b>Transform</b> and <b>share</b> data
            </li>
            <li class="home-page__content__whatis__reason">
              High <b>quality</b> data by design
            </li>
          </ul>
          <p>
            Read more{" "}
            <a
              class="home-page__highlight"
              href="docs/overview/legend-overview"
            >
              here
            </a>
            .
          </p>
        </section>{" "}
      </div>
    </article>
  );
}

function Features() {
  return (
    <article class="home-page__content__tools">
      <div class="home-page__content__container">
        <div class="home-page__content__tools__text">
          <p>Learn about the different Legend products!</p>
          <ul>
            <li>
              <p>
                <strong class="home-page__highlight">Studio</strong> -- Our data
                modelling Editor, which you can leverage to describe and connect
                data to build your graph of information. Visualize those data
                models in diagrams to facilitate the dialog between business and
                development teams. Connect data models to data to unlock query
                capabilities.
              </p>
            </li>
            <li>
              <p>
                <strong class="home-page__highlight">Query</strong> -- Our query
                User Interface to access modelled data. Browse and navigate the
                graph of information and then ask informed questions to the
                data. No SQL needed, 100% drag & drop, 100% simple!
              </p>
            </li>
            <li>
              <p>
                <strong class="home-page__highlight">Services</strong> -- Our
                solution to reliably and programatcially share high quality data
                with other applications. Any query designed in{" "}
                <strong class="home-page__highlight">Query</strong> can be
                promoted to a production-ready Legend API with a simple click of
                a button.
              </p>
            </li>
          </ul>
          <p>
            The Legend platform is backed by a powerful{" "}
            <strong class="home-page__highlight">Execution Engine</strong>,
            which enables the usage of data models in numerous data-driven
            business flows, and a robust{" "}
            <strong class="home-page__highlight">
              Change Management (SDLC)
            </strong>{" "}
            process, which ensures the safe collaboration on and stability of
            the Legend platform.
          </p>
        </div>
        <div class="home-page__content__tools-panel">
          <div class="home-page__content__tools-panel__text-cursor"></div>
          <div class="home-page__content__tool">
            <span class="code__letter">s</span>
            <span class="code__letter">t</span>
            <span class="code__letter">u</span>
            <span class="code__letter">d</span>
            <span class="code__letter">i</span>
            <span class="code__letter">o</span>
          </div>
          <div class="home-page__content__tool">
            &nbsp;&nbsp;&nbsp;<span class="code__letter">g</span>
            <span class="code__letter">r</span>
            <span class="code__letter">a</span>
            <span class="code__letter">p</span>
            <span class="code__letter">h</span>
            <span class="code__letter">(</span>
            <span class="code__letter">)</span>
          </div>
          <div class="home-page__content__tool">
            &nbsp;<span class="code__letter">s</span>
            <span class="code__letter">e</span>
            <span class="code__letter">r</span>
            <span class="code__letter">v</span>
            <span class="code__letter">i</span>
            <span class="code__letter">c</span>
            <span class="code__letter">e</span>
            <span class="code__letter">s</span>
            <span class="code__letter">;</span>
          </div>
          <div class="home-page__content__tool">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="code__letter">s</span>
            <span class="code__letter">d</span>
            <span class="code__letter">l</span>
            <span class="code__letter">c</span>
          </div>
          <div class="home-page__content__tool">
            &nbsp;<span class="code__letter">e</span>
            <span class="code__letter">n</span>
            <span class="code__letter">g</span>
            <span class="code__letter">i</span>
            <span class="code__letter">n</span>
            <span class="code__letter">e</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function Ecosystem() {
  return (
    <article class="home-page__content__ecosystem">
      <div class="home-page__content__container">
        <img
          class="home-page__content__ecosystem__diagram"
          alt="Architecture Diagram"
          src="/img/productdiagram_dark.svg"
        />
      </div>
    </article>
  );
}

function Home() {
  const context = useDocusaurusContext();

  const { siteConfig = {} } = context;

  return (
    <div title={siteConfig.title} description={siteConfig.tagline}>
      <main class="home-page">
        <header class="home-page__header">
          <div class="home-page__header__container">
            <div class="home-page__header__title">
              <a href="#" class="home-page__header__title__home-btn">
                <svg
                  class="home-page__header__title__logo"
                  width="100%"
                  height="100%"
                  viewBox="0 0 720 209.1"
                  style={{
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    "stroke-linejoin": "  ",
                    "stroke-miterlimit": 2,
                  }}
                >
                  <g>
                    <path
                      class="st0"
                      d="M243.7,137.6h25.1c-5.4,11.6-17.6,17-31.4,17c-21.5,0-36.9-17.4-36.9-39.7c0-22.3,15.5-39.7,36.9-39.7
c13.1,0,23.2,2.1,33.3,14.2c0.9,1.1,2.8,2.8,5.4,2.8c7.5,0,30.3,0,33.7,0c3.2,0,4.5-3,3.2-5.8c-17-34.8-38.4-49.2-75.6-49.2
c-43.8,0-80.5,34.8-80.5,77.7c0,6.5,0.9,12.9,2.5,18.9l55.7,36.8c2.7,1.8,2.7,4.6,0,6.4l-12.1,8c10.5,4.9,22.1,7.7,34.4,7.7
c17.6,0,31.6-6.2,42.3-15.5v7.5c0,3,2.4,5.4,5.4,5.4h24.3c3,0,5.4-2.4,5.4-5.4c0-71.9,0-71.9,0-71.9c0-3-2.4-5.4-5.4-5.4h-65.7
c-2.8,0-5.2,2.4-5.2,5.4v19.5C238.5,135.2,240.9,137.6,243.7,137.6L243.7,137.6z"
                    />
                    <path
                      class="st0"
                      d="M424.5,153.1h-59.9v-19.8h48.1c2.8,0,5.4-2.4,5.4-5.4v-26.2c0-3-2.6-5.4-5.4-5.4h-48.1V76.6h59.3
c2.8,0,5.4-2.4,5.4-5.4V45c0-3-2.6-5.4-5.4-5.4h-98.1c-3,0-5.4,2.4-5.4,5.4v139.6c0,3,2.4,5.4,5.4,5.4h98.8c3,0,5.4-2.4,5.4-5.4
v-26.2C429.9,155.4,427.5,153.1,424.5,153.1L424.5,153.1z"
                    />
                    <path
                      class="st0"
                      d="M562.8,190c3,0,5.4-2.4,5.4-5.4V45c0-3-2.4-5.4-5.4-5.4h-33.5c-3,0-5.4,2.4-5.4,5.4v71.1
c0,0-41.9-62.7-46.4-68.7c-4.5-6-6.9-7.7-12-7.7h-23.2h-1.5c-2.8,0-5.4,2.4-5.4,5.4v139.6c0,3,2.4,5.4,5.4,5.4h33.7
c2.8,0,5.4-2.4,5.4-5.4v-72.4l48.1,72.4c2.4,3.4,4.7,5.4,11,5.4C540.7,190,562.8,190,562.8,190L562.8,190z"
                    />
                    <path
                      class="st0"
                      d="M633.8,39.7c-0.6,0-54.1,0-54.1,0c-3,0-5.3,2.4-5.3,5.4v139.6c0,3,2.3,5.4,5.3,5.4c0,0,35.1,0,52.4,0
c52.8,0,87.9-27.7,87.9-75.4C720,80.3,702.2,39.7,633.8,39.7L633.8,39.7z M637.1,153.1c-2.5,0-11.4,0-19.2,0V76.6c7,0,15,0,19.2,0
c29,0,38.7,19.8,38.7,38.4C675.8,135.7,664.2,153.1,637.1,153.1L637.1,153.1z"
                    />
                    <path
                      class="st0"
                      d="M141.9,86.5V68.1c0-1.6-1.2-2.9-2.8-2.9H66.5c-1.6,0-2.8,1.3-2.8,2.9v18.4c0,1.6,1.2,2.9,2.8,2.9h72.6
C140.7,89.4,141.9,88.1,141.9,86.5L141.9,86.5z"
                    />
                    <path
                      class="st0"
                      d="M118.4,116.9V98.5c0-1.6-0.9-2.9-2-2.9H65.7c-1.1,0-2,1.3-2,2.9v18.4c0,1.6,0.9,2.9,2,2.9h50.8
C117.6,119.8,118.4,118.6,118.4,116.9L118.4,116.9z"
                    />
                    <path
                      class="st0"
                      d="M141.9,147.3V129c0-1.6-1.2-2.9-2.8-2.9H66.5c-1.6,0-2.8,1.3-2.8,2.9v18.4c0,1.6,1.2,2.9,2.8,2.9h72.6
C140.7,150.3,141.9,149,141.9,147.3L141.9,147.3z"
                    />
                    <path
                      class="st0"
                      d="M205,170.7l-52.3-31.6c-2.7-1.7-5-0.4-5,2.8v16l-91.9,0V59.4h11.4c3.2,0,4.5-2.2,2.8-5L38.4,2.1
c-1.7-2.7-4.3-2.7-6,0L0.7,54.4c-1.7,2.7-0.4,5,2.8,5h12.1v126.1c0,3,2.4,5.4,5.4,5.4h126.7v14.8c0,3.2,2.2,4.4,5,2.8l52.3-31.6
C207.7,175.1,207.7,172.4,205,170.7L205,170.7z"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <nav class="home-page__header__nav">
              <div class="home-page__header__nav__item">
                <a
                  class="home-page__header__nav__item__link-btn"
                  href="https://github.com/finos/legend"
                  target="_self"
                >
                  Github
                </a>
              </div>
              <div class="home-page__header__nav__item">
                <a
                  class="home-page__header__nav__item__link-btn"
                  href="docs/overview/legend-overview"
                  target="_self"
                >
                  Docs
                </a>
              </div>
            </nav>
          </div>
        </header>
        <section class="home-page__content">
          <Brand />
          <WhatIsLegend />
        </section>
        <Features />
        <Ecosystem />
      </main>

      <AdditionalScripts />
      <footer class="home-page__footer">
        <section class="sitemap">
          <a href="#" class="nav-home"></a>
        </section>
        <section class="finos finosBanner">
          <a href="https://www.finos.org">
            <img
              id="finosicon"
              src="img/finos_wordmark.svg"
              height="75px"
              alt="FINOS"
              title="FINOS"
            />
          </a>
        </section>
      </footer>
    </div>
  );
}

/*
Due to server-side rendering, we cannot freely access browser globals 
and have to add an escape-hatch to allow usage, see: 
ehttps://docusaurus.io/docs/advanced/ssg#browseronly
*/
function AdditionalScripts() {
  const isBrowser = useIsBrowser();

  if (isBrowser) {
    (function (i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function () {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );

    ga("create", "UA-89349362-7", "auto");
    ga("send", "pageview");

    window.addEventListener("scroll", (e) => {
      const container = document.querySelector(".home-page");
      const header = document.querySelector(".home-page__header");
      const title = document.querySelector(".home-page__header__title");
      const logo = document.querySelector(".home-page__logo");
      if (
        window.scrollY >=
        logo.parentNode.getBoundingClientRect().y +
          logo.getBoundingClientRect().y +
          logo.getBoundingClientRect().height +
          2 * window.scrollY -
          300
      ) {
        header.classList.add("home-page__header--visible");
        title.classList.add("home-page__header__title--visible");
      } else {
        header.classList.remove("home-page__header--visible");
        title.classList.remove("home-page__header__title--visible");
      }
    });

    // update color for tools text
    const updateCodeLettersColor = () => {
      const codeLetters = document.querySelectorAll(
        ".home-page__content__tools-panel .code__letter"
      );
      codeLetters.forEach((letter) => {
        const codeLetterColors = [
          "blue",
          "red",
          "purple",
          "green",
          "orange",
          "yellow",
          "white",
          "white",
          "white",
        ]; // skew the probability by favoring whites
        letter.className =
          "code__letter code__letter--" +
          codeLetterColors[Math.floor(Math.random() * codeLetterColors.length)];
      });
    };
    updateCodeLettersColor();
    setInterval(updateCodeLettersColor, 3000);
  }

  return <span></span>;
}

export default Home;
