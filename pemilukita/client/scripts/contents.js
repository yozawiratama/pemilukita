Template.campaign_video_list_item.events({
    'click .list-group-item': function (e,tmpl) {
        e.preventDefault();
        console.log(tmpl);
        if (this.id_calon[0] == "ps" || this.id_calon[0] == "hr")
            Session.set(SessionRef.Name.ActiveCampaignVideoIdLeft, getYoutubeID(this.url_video));
        else
            Session.set(SessionRef.Name.ActiveCampaignVideoIdRight, getYoutubeID(this.url_video));
    }
});
Template.campaign_video_list_item.Title = function () {
    return this.judul;
};
//Template.campaign_video_list_item.ItemCampaignVideoActive = function () {
//    if("http://www.youtube.com/watch?v="+Session.get(SessionRef.Name.ActiveCampaignVideoIdLeft == this.url_video) || "http://www.youtube.com/watch?v="+Session.get(SessionRef.Name.ActiveCampaignVideoIdRight== this.url_video)) return "active";
//    else return "";
//};