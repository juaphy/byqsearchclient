package com.jeecms.cms.action.front;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONException;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jeecms.common.web.ResponseUtils;
import com.jeecms.core.entity.CmsSite;
import com.jeecms.core.web.util.CmsUtils;
import com.jeecms.core.web.util.FrontUtils;

/**
 * 查询机首页Action
 * @author swc 2018-03-12
 *
 */
@Controller
public class SearchClientIndexAct {

	/** 查询机相关页面路径*/
	public static final String INDEXPAGE = "searchclient/home";

	/**
	 * 首页
	 */
	@RequestMapping(value = "/searchClient/index.jspx")
	public String search(HttpServletRequest request,HttpServletResponse response, ModelMap model) 
					throws JSONException {
		// ResponseUtils.renderJson(response, json.toString());
		CmsSite site = CmsUtils.getSite(request);
		FrontUtils.frontData(request, model, site);
		FrontUtils.frontPageData(request, model);
		return FrontUtils.getTplPath(site.getSolutionPath(), INDEXPAGE, "index");
	}

}

