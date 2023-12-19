import { serverURL } from "./serverURL";
import commonAPI, {CommonAPI} from "./CommonAPI";

// to upload a new video
export const uploadAllVideo =async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}video`,reqBody);
}

// to get all video already inserted

export const getAllVideos = async ()=>{
   return await commonAPI('Get',`${serverURL}video`,"")
}

// to delete a specific  
 export const  deleteVideo=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}video/${id}`,{})
 }

//  add details to watch history


export const addToHistory = async(videoDetails)=>{
   return await commonAPI ('POST',`${serverURL}history`,videoDetails)
}

// get all details of watchhistory
 
export const  getHistory=async ()=>{
   return await commonAPI ('GET',`${serverURL}history`,"")
}

// to delete video from history
export const  deleteHistory=async(id)=>{
   return await commonAPI('DELETE',`${serverURL}history/${id}`,{})
 }

//  add category 
export const uploadAllCategory =async (reqBody)=>{
   return await commonAPI('POST',`${serverURL}category`,reqBody);
}

// get all category

export const getAllCategory =async (reqBody)=>{
   return await commonAPI('GET',`${serverURL}category`,"");
}

// delete category
export const deleteCategory =async(id)=>{
   return await commonAPI('DELETE',`${serverURL}category/${id}`,{});
}

// get video details with Video id
export const  getVideoDetails = async (id)=>{
   return await commonAPI ('GET',`${serverURL}video/${id}`,"")
}

export const updateCategory= async(id,body)=>{
   return await commonAPI('PUT',`${serverURL}category/${id}`,body)
}