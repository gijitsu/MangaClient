import 'package:http/http.dart' as http;
import 'dart:convert';
import 'package:flutter/foundation.dart' show kIsWeb;


const String baseWebUrl = 'proxy.bertmpngn.workers.dev';
const String graphQLEndpointWeb = 'https://servermangaanime-zjgm.onrender.com/graphql';
const String graphQLEndpointMobile = 'http://10.0.2.2:5000/graphql';

Future<Map<String, dynamic>> graphqlQuery(
    String query, Map<String, dynamic> variables) async {
  final url = kIsWeb ? graphQLEndpointWeb : graphQLEndpointMobile;

  final response = await http.post(
    Uri.parse(url),
    headers: {'Content-Type': 'application/json'},
    body: json.encode({'query': query, 'variables': variables}),
  );

  if (response.statusCode == 200) {
    return json.decode(response.body);
  } else {
    throw Exception('GraphQL query failed with status: ${response.statusCode}');
  }
}

Future<http.Response> fetchTitle(String title) {
  final queryParameters = {"title": title};
  final uri = Uri.https(baseWebUrl, '/manga', queryParameters);
  return http.get(uri);
}

Future<Map<String, dynamic>> fetchStatistics(String mangaId) async {
  final uri = Uri.https(baseWebUrl, '/statistics/manga/$mangaId');
  final response = await http.get(uri);

  if (response.statusCode == 200) {
    return json.decode(response.body);
  } else {
    throw Exception('Failed to fetch statistics');
  }
}

Future<http.Response> fetchGreatest(Map<String, dynamic> order, {String title = ' '}) {
  final queryParameters = <String, String>{
    for (var key in order.keys) 'order[$key]': order[key].toString(),
    'title': title,
  };
  final uri = Uri.https(baseWebUrl, '/manga', queryParameters);
  return http.get(uri);
}

Future<http.Response> fetchTitleAdvanced(List<String> includedTags, List<String> excludedTags) {
  final queryParameters = {
    for (var tag in includedTags) 'includedTags[]': tag,
    for (var tag in excludedTags) 'excludedTags[]': tag,
  };
  final uri = Uri.https(baseWebUrl, '/manga', queryParameters);
  return http.get(uri);
}

Future<http.Response> fetchCoverArt(String coverId) {
  final uri = Uri.https(baseWebUrl, '/cover/$coverId');
  return http.get(uri);
}

Future<http.Response> fetchTags() {
  final uri = Uri.https(baseWebUrl, '/manga/tag');
  return http.get(uri);
}

Future<http.Response> fetchChapters(String id, {int offset = 0, int limit = 100}) {
  final queryParameters = {
    'order[volume]': 'asc',
    'order[chapter]': 'asc',
    'translatedLanguage[]': 'en',
    'offset': offset.toString(),
    'limit': limit.toString(),
  };
  final uri = Uri.https(baseWebUrl, '/manga/$id/feed', queryParameters);
  return http.get(uri);
}

Future<Map<String, dynamic>> makeGetRequest(String chapterId) async {
  final uri = Uri.https(baseWebUrl, '/at-home/server/$chapterId');
  final response = await http.get(uri);

  if (response.statusCode == 200) {
    return json.decode(response.body);
  } else {
    throw Exception('Failed to load chapter data');
  }
}
