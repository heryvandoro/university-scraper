require("dotenv").config();
const express = require("express");
const Crawler = require("crawler");
const app = express();

const url = "https://www.hotcourses.co.id/study/international/schools-colleges-university/list.html";

const crawler = new Crawler({
    jQuery : true
});

app.get("/universities", async (req, res) => {
    let {universities, totalPage} = await new Promise((resolve, reject) => {
        try {
            crawler.direct({
                uri: `${url}?pageNo=${req.query.page || 1}&uniSearchText=${req.query.keyword || ''}`,
                callback : (error, data) => {
                    const $ = data.$;
                    let universities = [];
                    let universitiesDom = $("div.container a.pr_rslt");
                    universitiesDom.each((i, universityDom) => {
                        universityDom = $(universityDom);
                        universities.push({
                            logo: universityDom.find(".pr_lgo img").data("src"),
                            name: universityDom.find(".sr_nam h2").text(),
                            country: universityDom.find(".sr_nam span.grey").text(),
                        })
                    });
                    resolve({
                        universities,
                        totalPage: parseInt($(".pagna li:last-child a").text()) || 0
                    });
                }
            });
        } catch (e) {
            reject(e);
        }
    });
    res.send({
        data: universities,
        meta: {
            total_page: totalPage,
            current_page: parseInt(req.query.page) || 1
        }
    });
});

app.listen(process.env.port || 3000);